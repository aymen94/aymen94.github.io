'use strict';
var change = document.querySelectorAll('H2.hide');
var ulMenu = document.querySelector('nav>ul');
var footer = document.getElementById('footer');
var i = 0;

window.addEventListener('scroll', function () {
  this.pageYOffset > 80
    ? (footer.style.display = 'inline-flex')
    : (footer.style.display = 'none');
});

document.getElementById('menu').addEventListener('click', function (e) {
  if (ulMenu.className === 'show') ulMenu.classList.remove('show');
  else ulMenu.classList.add('show');
});

ulMenu.addEventListener('click', function () {
  ulMenu.classList.remove('show');
});

function switchText() {
  change[i].classList.remove('show');
  i = i % (change.length - 1);
  change[++i].classList.add('show');
}

window.addEventListener('load', function () {
  if ('serviceWorker' in navigator)
    try {
      navigator.serviceWorker
        .register('sw.min.js', { scope: './' })
        .then(function (reg) {
          console.info('Service worker registration success');
        });
    } catch (err) {
      console.error(err);
    }
  else console.log('no serviceWorker');

  setInterval(switchText, 1500);
});