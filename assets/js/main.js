var change = document.querySelectorAll('H2.hide');
var menu = document.getElementById('menu');
var ulMenu = document.querySelector('nav>ul');
var i = 0;


function switchText() {
    change[i].classList.remove('show');
    i = i % (change.length - 1);
    change[++i].classList.add('show');
}

setInterval(switchText, 1500);

menu.addEventListener('click', function () {
    if (ulMenu.className === 'show')
        ulMenu.classList.remove('show');
    else
        ulMenu.classList.add('show');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', e => {
    if ('serviceWorker' in navigator)
        try {
            navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (registration) {
                console.log('Service worker registration succeeded:', registration);
            });
        } catch (err) {
            console.log(err);
        }
    else
        console.log('no serviceWorker');
});