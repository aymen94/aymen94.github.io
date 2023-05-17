'use strict';

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
});

window.document.getElementById('changeColorBtn').addEventListener('click', function (et) {
  let icons = document.getElementsByClassName('icon');
  if (document.body.style.backgroundColor == 'white') {
    document.body.style.backgroundColor = 'black';
    document.getElementById('home').style.backgroundColor = 'white';
    document.getElementById('home').style.color = 'black';
    changeColor(icons, 'black');
  } else {
    document.body.style.backgroundColor = 'white';
    document.getElementById('home').style.backgroundColor = 'black';
    document.getElementById('home').style.color = 'white';
    changeColor(icons, 'white');
  }
});

function changeColor(elements, color) {
  console.log(elements.length);
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].style.fill = color;
  }
}