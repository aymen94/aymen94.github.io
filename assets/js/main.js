document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  if (currentTheme) {
    changeTheme(currentTheme);
    if (currentTheme === "light") {
      themeToggle.textContent = "🌒";
    } else {
      themeToggle.textContent = "🌔";
    }
  }

  themeToggle.addEventListener("click", () => {
    let theme = "dark";
    if (document.documentElement.getAttribute("data-theme") === "light") {
      themeToggle.textContent = "🌔";
    } else {
      theme = "light";
      themeToggle.textContent = "🌒";
    }
    changeTheme(theme);
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.min.js");
    });
  }
});
