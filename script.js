//written by April Tsai, 08/19/2020

const prev = document.querySelector('.preBtn');
const next = document.querySelector('.nextBtn');
const container =document.querySelector('.container');

prev.addEventListener('click', preImg);
next.addEventListener('click', nextImg);

let imgNum = 0;


function preImg(){
	container.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:1000, fill:'forwards'});
	if (imgNum ===0){
		imgNum = 5;
	}
	imgNum--;
	container.style.backgroundImage = `url(images/bcg-${imgNum}.jpg)`;
}


function nextImg(){
	container.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:1000, fill:'forwards'});
	if (imgNum ===4){
		imgNum = -1;
	}
	imgNum++;
	container.style.backgroundImage = `url(images/bcg-${imgNum}.jpg)`;
}

