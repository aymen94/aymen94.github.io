"use strict";
function showHide(id) {
    var idToClass = document.getElementsByClassName(id)[0];
    hidden('.me');
    idToClass.style.display = 'block';
}
function clickMe(abc) {
    var v = document.getElementsByClassName(abc);
    hidden('.progress');
    for (var i = 0; i < v.length; i++)
        v[i].style.display = 'block';
}
function hidden(elemnt) {
    var hide = document.querySelectorAll(elemnt);
    for (var i = 0; i < hide.length; i++)
        hide[i].style.display = 'none';
}
particlesJS('particles-js', {
  'particles': {
    'number':{'value':'100','density':true},
    'color':{'value':'#ededed'},
    'shape':{'type':'circle'},
    'size':{'value':'5'},
    'opacity':{'random':true},
    'interactivity': { 'onclick': false },
}
