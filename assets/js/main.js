'use strict';
var change = document.querySelectorAll('H2.hide');
var ulMenu = document.querySelector('nav>ul');
var up = document.getElementById('up');
var i = 0;

window.addEventListener('scroll', function() {
  this.pageYOffset > 80
    ? (up.style.display = 'block')
    : (up.style.display = 'none');
});

document.getElementById('menu').addEventListener('click', function(e) {
  if (ulMenu.className === 'show') ulMenu.classList.remove('show');
  else ulMenu.classList.add('show');
});

ulMenu.addEventListener('click', function() {
  ulMenu.classList.remove('show');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function switchText() {
  change[i].classList.remove('show');
  i = i % (change.length - 1);
  change[++i].classList.add('show');
}

window.addEventListener('load', function() {
  if ('serviceWorker' in navigator)
    try {
      navigator.serviceWorker
        .register('sw.min.js', { scope: './' })
        .then(function(registration) {
          console.log('Service worker registration success');
        });
    } catch (err) {
      console.error(err);
    }
  else console.log('no serviceWorker');

  setInterval(switchText, 1500);
});
