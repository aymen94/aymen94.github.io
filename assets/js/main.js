document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  const MODES = ["system", "light", "dark"];
  const THEME_COLORS = { dark: "#0d1117", light: "#ffffff" };
  const systemLight = matchMedia("(prefers-color-scheme: light)");

  const getMode = () => {
    const mode = root.getAttribute("data-theme-mode");
    return MODES.includes(mode) ? mode : "system";
  };
  const nextMode = (mode) => MODES[(MODES.indexOf(mode) + 1) % MODES.length];

  const applyMode = (mode, persist) => {
    const theme =
      mode === "system" ? (systemLight.matches ? "light" : "dark") : mode;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-theme-mode", mode);
    themeToggle.setAttribute(
      "aria-label",
      `Theme: ${mode}. Switch to ${nextMode(mode)}`,
    );
    themeToggle.title = `Theme: ${mode}`;

    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      const scheme = (meta.media || "").includes("light") ? "light" : "dark";
      meta.content = THEME_COLORS[mode === "system" ? scheme : theme];
    });

    if (persist) {
      try {
        if (mode === "system") localStorage.removeItem("theme");
        else localStorage.setItem("theme", mode);
      } catch (e) {}
    }
  };

  applyMode(getMode(), false);

  themeToggle.addEventListener("click", () => {
    applyMode(nextMode(getMode()), true);
  });

  systemLight.addEventListener("change", () => {
    if (getMode() === "system") applyMode("system", false);
  });

  document.getElementById("emailLink")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const email = ["aymenadvance", "gmail.com"].join("@");
      const label = document.getElementById("emailLabel");

      try {
        await navigator.clipboard.writeText(email);
        label.textContent = "Email copied!";
      } catch {
        window.prompt("Copy this email address:", email);
      }
    });


  const projectList = document.getElementById("projectList");
  const projectsToggle = document.getElementById("projectsToggle");

  if (projectList && projectsToggle) {
    const total = projectList.querySelectorAll(":scope > li:not([hidden])").length;
    projectsToggle.addEventListener("click", () => {
      const collapse = !projectList.classList.contains("collapsed");
      projectList.classList.toggle("collapsed", collapse);
      projectsToggle.setAttribute("aria-expanded", String(!collapse));
      projectsToggle.textContent = collapse ? `Show all ${total} projects` : "Show less";
      if (collapse) document.getElementById("projects").scrollIntoView();
    });
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.min.js");
    });
  }
});
