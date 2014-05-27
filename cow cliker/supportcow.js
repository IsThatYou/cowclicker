function randleft(){
	var randl = parseInt(Math.floor(Math.random() * 580 + 300));
	while(randl>480 && randl < 640){

		randl = parseInt(Math.floor(Math.random() * 580 + 300));
	}
	return randl

}

function randtop(){
	var randt = parseInt(Math.floor(Math.random() * 280 + 150));

	while(randt>310 && randt < 480){
		randt = parseInt(Math.floor(Math.random() * 280 + 150));
	}

	return randt

}
