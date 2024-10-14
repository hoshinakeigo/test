const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menuBtn');
const panel = document.querySelector('.panel');

if(menu && menuBtn){
	menu.addEventListener('click',function(){
		menuBtn.classList.toggle('close');
		panel.classList.toggle('dblock');
	});
}