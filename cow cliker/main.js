var score = 0;
var mps = 5000;
var limit1 = 25;
var limit2 = 200;
var limit3 = 2000;
var limit4 = 10000;
var limit5 = 1000000;
var limit6 = 10000000;

$(document).ready(function(){
	init()
	

})

function init() {
	animation();
	

	};



function plusmethane(){
	var volume = document.getElementById("volume");
	score += mps
	volume.innerHTML = score + ' CM<sup>2</sup>';
	callMethane();

};

function Cereal(){

	if(score > limit1){
		mps += 1;
		score -= limit1;
		limit1 = parseInt(Math.floor(limit1 * 1.2));
		var cereal = document.getElementById("cereal");
		cereal.innerHTML = limit1 + ' CM<sup>2</sup><a href="javascript:Cereal();">Organic Cereal</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
	}
	
	
}

function Grass(){
	if(score > limit2){
		mps += 10;
		score -= limit2;
		limit2 = parseInt(Math.floor(limit2 * 1.2));
		var cereal = document.getElementById("grass");
		cereal.innerHTML = limit2 + ' CM<sup>2</sup><a href="javascript:Grass();">Bioengineered Grass</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
	}
}
function Cake(){
	if(score > limit3){
		mps += 20;
		score -= limit3;
		limit3 = parseInt(Math.floor(limit3 * 1.2));
		var cereal = document.getElementById("cake");
		cereal.innerHTML = limit3 + ' CM<sup>2</sup><a href="javascript:Cake();">Galic Cheese Cake</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
	}
}

function Clone(){
	if(score > limit4){
		mps += 100;
		score -= limit4;
		limit4 = parseInt(Math.floor(limit4 * 1.2));
		var cereal = document.getElementById("clone");
		cereal.innerHTML = limit4 + ' CM<sup>2</sup><a href="javascript:Clone();">Massive Clone</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
		randl = parseInt(Math.floor(Math.random() * 480 + 300));
		randt = parseInt(Math.floor(Math.random() * 280 + 150));
		$('#body').append('<div id = "clone-' + limit4 + '" class = "clone"</div>');
		$("#clone-"+ limit4 + "").css('top', randt);
		$("#clone-"+ limit4 + "").css('left', randl);

		
	}
}

function Para(){
	if(score > limit5){
		mps += 1000;
		score -= limit5;
		limit5 = parseInt(Math.floor(limit5 * 1.2));
		var cereal = document.getElementById("para");
		cereal.innerHTML = limit5 + ' CM<sup>2</sup><a href="javascript:Para();">Parallel Universe</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
	}
}

function Rain(){
	if(score > limit6){
		score -= 10,000,000;
		score -= limit6;
		limit6 = parseInt(Math.floor(limit6 * 1.2));
		var cereal = document.getElementById("grass");
		cereal.innerHTML = limit6 + ' CM<sup>2</sup><a href="javascript:Rain();">Rainbow</a></li>';
		volume.innerHTML = score + ' CM<sup>2</sup>';
	}
}