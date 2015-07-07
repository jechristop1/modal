var open = document.getElementById('openModal');
var overlay = document.getElementById('overlay');
var close = document.getElementById('closeModal');
function showOrHide(){
	overlay.classList.toggle('hide');
};
open.addEventListener('click', showOrHide);
close.addEventListener('click', showOrHide);