var change = document.querySelectorAll('H2.hide');
var i = 0;


function switchText(){
    change[i].classList.remove('show');
    i = i%(change.length-1);
    change[++i].classList.add('show');
}

setInterval(switchText,1500);

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
