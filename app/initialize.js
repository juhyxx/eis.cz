document.addEventListener('DOMContentLoaded', function() {
//	resize();
});
window.addEventListener('resize', function() {


	//resize();

});


function resize() {

	console.log('resize');


	var box = document.querySelector('#kontakt svg path#bubble').getBoundingClientRect();


	//document.querySelector('#kontakt .bubble').style.top = box.y + 'px';
	//document.querySelector('#kontakt .bubble').style.left = box.x + 'px';
	var style = document.querySelector('#kontakt .bubble').style;
	style.width = box.width + 'px';
	style.height = box.height + 'px';
	style.top = window.pageYOffset + box.top + 'px';
	style.left = window.pageXOffset + box.left + 'px';

	console.log(box);


}
