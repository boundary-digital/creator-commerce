import Swiper from 'swiper';
import { A11y, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
		centeredSlides: false,
		grabCursor: true,
		slideToClickedSlide: true,
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
		},
		breakpoints: {
			768: {
				centeredSlides: true,
				spaceBetween: 26,
			},
		},
		pagination: {
			el: pagination,
		},
	});
}

function testimonialSlider() {
	const gallery: HTMLElement = document.querySelector('.test_gallery');

	if (!gallery) return;

	const container: HTMLElement = gallery.querySelector('.swiper-container');
	const buttonPrev: HTMLElement = gallery.querySelector(
		'.test_slider-button.is-prev'
	);
	const buttonNext: HTMLElement = gallery.querySelector(
		'.test_slider-button.is-next'
	);

	let swiper = new Swiper(container, {
		modules: [EffectFade, A11y, Navigation],
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'fade',
		navigation: {
			prevEl: buttonPrev,
			nextEl: buttonNext,
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
		},
	});
}

(function homePage() {
	if (window.location.pathname !== '/creators') return;

	sliderCards();
	testimonialSlider();
})();
