//   node scripts/update-projects.mjs            fetch from GitHub, write data/projects.json, render index.html
//   node scripts/update-projects.mjs --render   only render index.html from data/projects.json

import { readFile, writeFile, mkdir } from "node:fs/promises";

const LOGIN = "aymen94";
const RECENT_LIMIT = 6; // the page shows 3; extra ones cover repos that are also pinned
const EXCLUDE = new Set([`${LOGIN}.github.io`, LOGIN]);
const RECENT_SHOWN = 2;
const OUT = new URL("../data/projects.json", import.meta.url);
const PAGE = new URL("../index.html", import.meta.url);
const token = process.env.GITHUB_TOKEN;

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${LOGIN}-projects-updater`,
  ...(token && { Authorization: `Bearer ${token}` }),
};

const getJson = async (url, init) => {
  const res = await fetch(url, { headers, ...init });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
};

const fromGraphql = (r) => ({
  name: r.name,
  url: r.url,
  description: r.description || "",
  homepage: r.homepageUrl || "",
  language: r.primaryLanguage?.name || "",
  pushedAt: r.pushedAt,
});

const fromRest = (r) => ({
  name: r.name,
  url: r.html_url,
  description: r.description || "",
  homepage: r.homepage || "",
  language: r.language || "",
  pushedAt: r.pushed_at,
});

async function viaGraphql() {
  const fields =
    "name url description homepageUrl stargazerCount pushedAt isArchived isPrivate primaryLanguage { name }";
  const query = `query($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { ${fields} } } }
      repositories(first: 20, privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false,
                   orderBy: { field: PUSHED_AT, direction: DESC }) { nodes { ${fields} } }
    }
  }`;
  const { data, errors } = await getJson("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  });
  if (errors) throw new Error(JSON.stringify(errors));
  return {
    pinned: data.user.pinnedItems.nodes.filter((r) => !r.isPrivate).map(fromGraphql),
    recent: data.user.repositories.nodes
      .filter((r) => !r.isArchived && !EXCLUDE.has(r.name))
      .map(fromGraphql),
  };
}

async function viaPublicRest() {
  const repos = await getJson(
    `https://api.github.com/users/${LOGIN}/repos?type=owner&sort=pushed&per_page=100`
  );
  const byName = new Map(repos.map((r) => [r.name, r]));

  const html = await (
    await fetch(`https://github.com/${LOGIN}`, { headers: { "User-Agent": headers["User-Agent"] } })
  ).text();
  const pinnedNames = html
    .split("pinned-item-list-item-content")
    .slice(1)
    .map((chunk) => chunk.match(new RegExp(`href="/${LOGIN}/([^"/]+)"`))?.[1])
    .filter(Boolean);

  return {
    pinned: pinnedNames.map((n) => byName.get(n)).filter(Boolean).map(fromRest),
    recent: repos
      .filter((r) => !r.fork && !r.archived && !EXCLUDE.has(r.name))
      .map(fromRest),
  };
}

const escapeHtml = (s) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const link = (href, text) =>
  `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(text)}</a>`;

const renderItem = (r, meta) =>
  [
    `          <li><span class="meta">${escapeHtml(meta)}</span>${link(r.url, r.name)}`,
    r.description && `            <p class="small-text">${escapeHtml(r.description.trim())}</p>`,
    r.homepage && `            <div class="links">${link(r.homepage, "Website")}</div>`,
    "          </li>",
  ]
    .filter(Boolean)
    .join("\n");

const replaceBlock = (html, name, items) => {
  const re = new RegExp(`(<!-- projects:${name}:start -->)[\\s\\S]*?(\\n[ \\t]*<!-- projects:${name}:end -->)`);
  if (!re.test(html)) throw new Error(`Missing projects:${name} markers in index.html`);
  return html.replace(re, (_, start, end) => [start, ...items].join("\n") + end);
};

async function render({ pinned, recent }) {
  const raw = await readFile(PAGE, "utf8");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  let html = raw.replace(/\r\n/g, "\n");

  // skip recent repos already linked elsewhere on the page (e.g. "More projects")
  const generated = /<!-- projects:(\w+):start -->[\s\S]*?<!-- projects:\1:end -->/g;
  const linked = new Set(
    [...html.replace(generated, "").matchAll(/github\.com\/[^/"]+\/([^/"?#]+)/g)].map((m) => m[1])
  );

  html = replaceBlock(html, "pinned", pinned.map((r) => renderItem(r, r.language)));
  html = replaceBlock(
    html,
    "recent",
    recent
      .filter((r) => !linked.has(r.name))
      .slice(0, RECENT_SHOWN)
      .map((r) => renderItem(r, r.language))
  );

  await writeFile(PAGE, html.replace(/\n/g, eol));
  console.log("rendered index.html");
}

if (process.argv.includes("--render")) {
  await render(JSON.parse(await readFile(OUT, "utf8")));
  process.exit(0);
}

const { pinned, recent } = token ? await viaGraphql() : await viaPublicRest();
const pinnedNames = new Set(pinned.map((r) => r.name));

const data = {
  generatedAt: new Date().toISOString(),
  pinned,
  recent: recent.filter((r) => !pinnedNames.has(r.name)).slice(0, RECENT_LIMIT),
};

await mkdir(new URL("./", OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(data, null, 2) + "\n");
console.log(`pinned: ${pinned.map((r) => r.name).join(", ")}`);
console.log(`recent: ${data.recent.map((r) => r.name).join(", ")}`);
await render(data);
