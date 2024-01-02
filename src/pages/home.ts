import Swiper from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

function sliderCards() {
	const gallery: HTMLElement = document.querySelector('.works_gallery_wrapper');

	if (!gallery) return;

	const container: HTMLElement = gallery.querySelector('.swiper-container');
	const pagination: HTMLElement = gallery.querySelector(
		'.works_gallery_pagination'
	);

	let swiper = new Swiper(container, {
		modules: [A11y, Pagination],
		slidesPerView: 'auto',
		spaceBetween: 8,
		grabCursor: true,
		centeredSlides: false,
		slideToClickedSlide: true,
		centerInsufficientSlides: true,
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
		},
		breakpoints: {
			768: {
				spaceBetween: 26,
				centeredSlides: true,
			},
		},
		pagination: {
			el: pagination,
		},
	});
}

(function brandsPage() {
	if (window.location.pathname !== '/') return;

	sliderCards();
})();
