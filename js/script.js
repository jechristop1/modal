var open = document.getElementById('openModal');
var overlay = document.getElementById('overlay');
var close = document.getElementById('closeModal');
function showOrHide(){
	if(overlay.classList.contains('hide')){
		overlay.classList.remove('hide');
	}else{
		overlay.classList.add('hide');
	}
};
open.addEventListener('click', showOrHide);
close.addEventListener('click', showOrHide);