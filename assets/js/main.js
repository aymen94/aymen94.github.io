document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';



  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  if (currentTheme) {
    changeTheme(currentTheme);
    if (currentTheme === 'light') {
      themeToggle.textContent = '🌒';
    } else {
      themeToggle.textContent = '🌔';
    }
  }

  themeToggle.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      theme = 'dark';
      themeToggle.textContent = '🌔';
    } else {
      themeToggle.textContent = '🌒';
    }
    changeTheme(theme);
  });


  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.min.js');
    })
  };

});