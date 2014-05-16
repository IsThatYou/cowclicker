function animation(){
	var field = document.getElementsByTagName("titlefield");
	var box = document.getElementsByTagName("title");
	var cow = document.getElementsByTagName("cow");



	//TweenMax.set(field, {perspective: 500});
	//TweenMax.set(box, {transformOrigin:"center center -500px"});
	//TweenMax.to($box, 1.3, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});



	TweenMax.to(cow, 2, {top:"1200px",ease: Back.easeOut});
}
