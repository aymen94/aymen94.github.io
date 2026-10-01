document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  // The inline script in <head> already applied the saved/system theme.
  const getTheme = () => (root.getAttribute("data-theme") === "light" ? "light" : "dark");

  const applyTheme = (theme, persist) => {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        // Storage may be unavailable (private mode); theme still applies for this visit.
      }
    }
  };

  applyTheme(getTheme(), false);

  themeToggle.addEventListener("click", () => {
    applyTheme(getTheme() === "light" ? "dark" : "light", true);
  });

  // Projects: show the first few, reveal the rest on demand
  const VISIBLE_PROJECTS = 4;
  const projectList = document.getElementById("projectList");
  const projectsToggle = document.getElementById("projectsToggle");

  if (projectList && projectsToggle && projectList.children.length > VISIBLE_PROJECTS) {
    const total = projectList.children.length;
    const setCollapsed = (collapsed) => {
      projectList.classList.toggle("collapsed", collapsed);
      projectsToggle.setAttribute("aria-expanded", String(!collapsed));
      projectsToggle.textContent = collapsed ? `Show all ${total} projects` : "Show less";
    };

    setCollapsed(true);
    projectsToggle.hidden = false;

    projectsToggle.addEventListener("click", () => {
      const collapse = !projectList.classList.contains("collapsed");
      setCollapsed(collapse);
      // After collapsing, bring the section back into view instead of leaving the user below it.
      if (collapse) document.getElementById("projects").scrollIntoView();
    });
  }

  if ("serviceWorker" in navigator) {
    // Register after load so it doesn't compete with first paint.
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.min.js");
    });
  }
});
