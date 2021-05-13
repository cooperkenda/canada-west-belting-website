document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#secondary-slider', {
		type: 'loop',
		gap : 75,
		arrows: false,
		pagination: false,
		perPage: 5,
		perMove: 1,
		autoplay: true,
		interval: 1750,
		breakpoints: {
			1100: {
				perPage: 4,
				gap : 50,
			},
			900: {
				perPage: 3,
				gap : 50,
			},
			600: {
				perPage: 2,
				gap : 50,
			}
		}
	} ).mount();
} );

// let loader = document.querySelector(".loader-container");

// window.addEventListener('load', hideLoader = () => {
// 	loader.style.display = 'none';
// });

