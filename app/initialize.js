var scrollTimeout;
function onscroll() {
	var scroll = Math.round(window.scrollY),
		articles = document.querySelectorAll("article");

	for (var i = 0; i < articles.length; i++) {
		if (articles[i].offsetTop + articles[i].offsetHeight > scroll +40) {
			var id = articles[i].id

			if (document.body.className !== id) {
				document.body.className = articles[i].id;
			}
			break;
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	onscroll();
});


window.addEventListener('scroll', function(e) {
	onscroll();

});


