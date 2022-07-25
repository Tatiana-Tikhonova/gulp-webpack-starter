import closestPolyfill from './modules/polyfills/closest';
import accordion from './modules/accordion';
import menu from './modules/menu';


//проверка браузера на поддержку webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}

});


window.addEventListener('DOMContentLoaded', () => {
	closestPolyfill(window);
	let vw = window.innerWidth,
		vh = window.innerHeight,
		documentBody = document.body,
		scrollbarWidth = window.outerWidth - window.innerWidth;
	menu(documentBody);
});