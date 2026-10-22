document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  // Theme: "system" (default, follows the OS), then the explicit "light" and "dark".
  // The inline script in <head> already applied the saved mode before first paint.
  const MODES = ["system", "light", "dark"];
  const THEME_COLORS = { dark: "#0d1117", light: "#ffffff" };
  const systemLight = matchMedia("(prefers-color-scheme: light)");

  const getMode = () => {
    const mode = root.getAttribute("data-theme-mode");
    return MODES.includes(mode) ? mode : "system";
  };
  const nextMode = (mode) => MODES[(MODES.indexOf(mode) + 1) % MODES.length];

  const applyMode = (mode, persist) => {
    const theme = mode === "system" ? (systemLight.matches ? "light" : "dark") : mode;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-theme-mode", mode);
    themeToggle.setAttribute("aria-label", `Theme: ${mode}. Switch to ${nextMode(mode)}`);
    themeToggle.title = `Theme: ${mode}`;

    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      const scheme = (meta.media || "").includes("light") ? "light" : "dark";
      meta.content = THEME_COLORS[mode === "system" ? scheme : theme];
    });

    if (persist) {
      try {
        if (mode === "system") localStorage.removeItem("theme");
        else localStorage.setItem("theme", mode);
      } catch (e) {
      }
    }
  };

  applyMode(getMode(), false);

  themeToggle.addEventListener("click", () => {
    applyMode(nextMode(getMode()), true);
  });

  systemLight.addEventListener("change", () => {
    if (getMode() === "system") applyMode("system", false);
  });

  // Projects: pinned and recently updated repositories come from GitHub automatically.
  // data/projects.json is refreshed daily by a workflow (pinned items need the GraphQL API);
  // the recent list is then refreshed live from the public REST API when it is reachable.
  const GITHUB_USER = "aymen94";
  const RECENT_COUNT = 3;
  const EXCLUDE = new Set([`${GITHUB_USER}.github.io`, GITHUB_USER]);
  const LIVE_CACHE_KEY = "recentRepos";
  const LIVE_CACHE_MS = 15 * 60 * 1000;

  const VISIBLE_PROJECTS = 4;
  const projectList = document.getElementById("projectList");
  const projectsToggle = document.getElementById("projectsToggle");

  // Collapse the hand-picked list to the first few, revealing the rest on demand.
  let collapseReady = false;
  const setupCollapse = () => {
    if (!projectList || !projectsToggle) return;
    const total = projectList.children.length;
    if (total <= VISIBLE_PROJECTS) {
      projectList.classList.remove("collapsed");
      projectsToggle.hidden = true;
      return;
    }
    const setCollapsed = (collapsed) => {
      projectList.classList.toggle("collapsed", collapsed);
      projectsToggle.setAttribute("aria-expanded", String(!collapsed));
      projectsToggle.textContent = collapsed ? `Show all ${total} projects` : "Show less";
    };
    setCollapsed(projectList.classList.contains("collapsed") || !collapseReady);
    projectsToggle.hidden = false;

    if (!collapseReady) {
      collapseReady = true;
      projectsToggle.addEventListener("click", () => {
        const collapse = !projectList.classList.contains("collapsed");
        setCollapsed(collapse);
        // After collapsing, bring the section back into view instead of leaving the user below it.
        if (collapse) document.getElementById("projects").scrollIntoView();
      });
    }
  };

  setupCollapse();

  const relativeTime = (iso) => {
    const days = Math.round((Date.parse(iso) - Date.now()) / 86400000);
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (days > -30) return rtf.format(days, "day");
    if (days > -365) return rtf.format(Math.round(days / 30), "month");
    return rtf.format(Math.round(days / 365), "year");
  };

  // Treat the GitHub Pages and custom-domain spellings of a link as the same project.
  const normalizeUrl = (url) =>
    (url || "")
      .toLowerCase()
      .replace(/^https?:\/\/(www\.)?/, "")
      .replace(`${GITHUB_USER}.github.io`, "aymen.xyz")
      .replace(/\/+$/, "");

  const fromRest = (r) => ({
    name: r.name,
    url: r.html_url,
    description: r.description || "",
    homepage: r.homepage || "",
    language: r.language || "",
    stars: r.stargazers_count,
    pushedAt: r.pushed_at,
  });

  const link = (href, text) => {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = text;
    return a;
  };

  const renderRepo = (repo, showUpdated) => {
    const li = document.createElement("li");

    const meta = document.createElement("span");
    meta.className = "meta";
    const parts = [repo.language || "Repository"];
    if (repo.stars > 0) parts.push(`★ ${repo.stars}`);
    if (showUpdated && repo.pushedAt) parts.push(`updated ${relativeTime(repo.pushedAt)}`);
    meta.textContent = parts.join(" · ");
    li.append(meta, link(repo.url, repo.name));

    if (repo.description) {
      const p = document.createElement("p");
      p.className = "small-text";
      p.textContent = repo.description;
      li.append(p);
    }

    if (repo.homepage && /^https?:\/\//.test(repo.homepage)) {
      const links = document.createElement("div");
      links.className = "links";
      links.append(link(repo.homepage, "Website"));
      li.append(links);
    }
    return li;
  };

  const renderGroup = (groupId, listId, repos, showUpdated) => {
    const group = document.getElementById(groupId);
    const list = document.getElementById(listId);
    if (!group || !list) return;
    list.replaceChildren(...repos.map((r) => renderRepo(r, showUpdated)));
    group.hidden = repos.length === 0;
  };

  // Drop hand-picked entries that are already shown as pinned or recent.
  // Filters from the original items, so a later render can bring an entry back.
  const curated = projectList ? [...projectList.children] : [];
  const dedupeCurated = (repos) => {
    if (!projectList) return;
    const shown = new Set(repos.flatMap((r) => [normalizeUrl(r.url), normalizeUrl(r.homepage)]));
    shown.delete("");
    projectList.replaceChildren(
      ...curated.filter((li) => {
        const a = li.querySelector("a");
        return !(a && shown.has(normalizeUrl(a.href)));
      })
    );
  };

  const render = (pinned, recent) => {
    renderGroup("pinnedGroup", "pinnedList", pinned, false);
    renderGroup("recentGroup", "recentList", recent, true);
    dedupeCurated([...pinned, ...recent]);

    const moreTitle = document.getElementById("moreProjectsTitle");
    if (moreTitle && projectList) {
      moreTitle.hidden = !(pinned.length || recent.length) || projectList.children.length === 0;
    }
    setupCollapse();
  };

  const pickRecent = (repos, pinned) => {
    const pinnedNames = new Set(pinned.map((r) => r.name));
    return repos.filter((r) => !EXCLUDE.has(r.name) && !pinnedNames.has(r.name)).slice(0, RECENT_COUNT);
  };

  const readLiveCache = () => {
    try {
      const cached = JSON.parse(sessionStorage.getItem(LIVE_CACHE_KEY));
      if (cached && Date.now() - cached.at < LIVE_CACHE_MS) return cached.repos;
    } catch (e) {
      // Ignore unavailable or malformed storage.
    }
    return null;
  };

  const fetchLiveRecent = async () => {
    const cached = readLiveCache();
    if (cached) return cached;

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=pushed&per_page=20`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = (await res.json()).filter((r) => !r.fork && !r.archived).map(fromRest);
    try {
      sessionStorage.setItem(LIVE_CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
    } catch (e) {
      // Caching is optional.
    }
    return repos;
  };

  const loadProjects = async () => {
    let pinned = [];
    let recent = [];

    try {
      const res = await fetch("/data/projects.json", { cache: "no-cache" });
      if (res.ok) {
        const data = await res.json();
        pinned = data.pinned || [];
        recent = pickRecent(data.recent || [], pinned);
        render(pinned, recent);
      }
    } catch (e) {
      // Fall through to the live API.
    }

    try {
      const live = pickRecent(await fetchLiveRecent(), pinned);
      if (live.length) render(pinned, live);
    } catch (e) {
      // Rate-limited or offline: keep the snapshot (or the static list) as is.
    }
  };

  if (projectList) loadProjects();

  if ("serviceWorker" in navigator) {
    // Register after load so it doesn't compete with first paint.
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.min.js");
    });
  }
});
