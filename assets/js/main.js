"use strict";
window.addEventListener('load', e =>{
  if ('serviceWorker' in navigator)
    try {
      navigator.serviceWorker.register('sw.js');
    }catch(err){
      console.log(err);
    }
  else
    console.log('no serviceWorker');
});
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
document.querySelector('#theme').addEventListener('change', e => {
  let jumbotron = document.querySelectorAll('.jumbotron');
  if (e.target.value == 'white') {
    document.body.style.backgroundColor = '#4286f4';
    for (let i of jumbotron)
      i.style.backgroundColor = 'rgba(214,214,214,0.76)';
  } else {
    document.body.style.backgroundColor = '#212026';
    for (let i of jumbotron)
      i.style.backgroundColor = 'rgba(64, 64, 71, .92)';
  }
});
particlesJS('particles-js', {
  'particles': {
    'number': { 'value': '100', 'density': true },
    'color': { 'value': '#ededed' },
    'shape': { 'type': 'circle' },
    'size': { 'value': '5' },
    'opacity': { 'random': true },
    'interactivity': { 'onclick': false },
  }
});