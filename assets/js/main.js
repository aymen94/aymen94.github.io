document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themes = ["system", "light", "dark"];
  let themeIndex = 0;
  let theme = themes[themeIndex];

  const updateThemeButton = () => {
    const label = theme === "system" ? "system (default)" : theme;
    themeToggle.setAttribute("aria-label", `Theme: ${label}`);
    themeToggle.title = `Theme: ${label}`;
  };

  root.dataset.themeMode = theme;
  updateThemeButton();
  themeToggle.hidden = false;
  themeToggle.addEventListener("click", () => {
    themeIndex = (themeIndex + 1) % themes.length;
    theme = themes[themeIndex];
    root.dataset.themeMode = theme;
    if (theme === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }
    updateThemeButton();
  });

  document.getElementById("emailPopupOpen").addEventListener("click", () => {
    window.alert(["aymenadvance", "@", "gmail.com"].join(""));
  });
});
