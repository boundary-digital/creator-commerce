import Swiper from 'swiper';
import {
	A11y,
	Pagination,
	Thumbs,
	FreeMode,
	EffectFade,
	Navigation,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function heroGallery() {
	const galleryWrap: HTMLElement = document.querySelector(
		'.social-hero_gallery'
	);

	if (!galleryWrap) return;

	const topGallery: HTMLElement = galleryWrap.querySelector(
		'.social-hero_gallery-top'
	);

	const thumbsGallery: HTMLElement = galleryWrap.querySelector(
		'.social-hero_gallery-thumbs'
	);

	let thumbnails = new Swiper(thumbsGallery, {
		modules: [Thumbs, FreeMode, A11y],
		spaceBetween: 14,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
		a11y: {
			enabled: true,
		},
	});
	let gallery = new Swiper(topGallery, {
		modules: [Thumbs, EffectFade, A11y],
		effect: 'fade',
		spaceBetween: 0,
		slidesPerView: 1,
		grabCursor: true,
		thumbs: {
			swiper: thumbnails,
		},
		a11y: {
			enabled: true,
		},
	});
}

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

(function brandsPage() {
	if (window.location.pathname !== '/brands/social-snowball') return;

	heroGallery();
	sliderCards();
	testimonialSlider();
})();
