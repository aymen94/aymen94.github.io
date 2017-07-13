function clickMe(abc){
	var v=document.getElementsByClassName(abc);
	hidden('.progress');
   for(var i=0;i<v.length;i=i+1){
	  v[i].style.visibility = 'visible';
	}
}
function hidden(elemnt){
   var hide=document.querySelectorAll(elemnt);
   for(var i=0;i<hide.length;i=i+1){
	  hide[i].style.visibility = 'hidden';
	}
}

