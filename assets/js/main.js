 showHide=id=>{
	console.log(id);
	var idToClass=document.getElementsByClassName(id)[0];
		hidden('.me');
	 idToClass.style.display='block';
}

clickMe=abc=>{
	var v=document.getElementsByClassName(abc);
	hidden('.progress');
   for(var i=0;i<v.length;i=i+1){
	  v[i].style.display = 'block';
	}
}

hidden=elemnt=>{
   var hide=document.querySelectorAll(elemnt);
   for(var i=0;i<hide.length;i=i+1){
	  hide[i].style.display = 'none';
	}
}