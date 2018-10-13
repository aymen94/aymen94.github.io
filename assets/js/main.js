var change = document.querySelectorAll('H2.hide');
var menu = document.getElementById('menu');
var ulMenu = document.querySelector('nav>ul');
var link = document.querySelectorAll('a[href^="#"]');
var up = document.getElementById('up');
var i = 0;


function switchText() {
    change[i].classList.remove('show');
    i = i % (change.length - 1);
    change[++i].classList.add('show');
}


window.addEventListener('scroll', function () {
    if (this.pageYOffset > 80)
        up.style.display = 'block';
    else
        up.style.display = 'none';

})

menu.addEventListener('click', function () {
    if (ulMenu.className === 'show')
        ulMenu.classList.remove('show');
    else
        ulMenu.classList.add('show');
});

link.forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', function () {
    if ('serviceWorker' in navigator)
        try {
            navigator.serviceWorker.register('sw.min.js', { scope: './' }).then(function (registration) {
                console.log('Service worker registration success');
            });
        } catch (err) {
            console.log(err);
        }
    else
        console.log('no serviceWorker');

    setInterval(switchText, 1500);

});
