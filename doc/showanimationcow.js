

function animation(){
	var field = document.getElementById("titlefield");
	var box = document.getElementById("title");
	

	
	



	TweenMax.set(field, {perspective: 500});
	TweenMax.set(box, {transformOrigin:"center center -500px"});
	TweenMax.to(box, 1.3, {scaleX:0.8, scaleY:0.8, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});

}

function callMethane(){
	randt = parseInt(Math.floor(Math.random() * 60 + 195));
	randl = parseInt(Math.floor(Math.random() * 80 + 240));
	$('#body').append('<div class = "methane" style = "top:'+ randt +'; left:' + randl +'; opacity:1"></div>');
	randnum = parseInt(Math.floor(Math.random() * 60 + 60));

	TweenMax.to($('.methane'), 1.5, {top:randt - randnum, opacity:0, left:randl});

	if ($('div.methane').length > 20){
		$('.methane').remove();
	}
}