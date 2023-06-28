'use strict';
const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	breakpoints: {
		// 768px以上の場合
		768: {
			slidesPerView: 3,
			spaceBetween: '10%'
		}
	},
	// ループ有効
	loop: true,
	pagination: {
		// ページネーション表示
		el: ".swiper-pagination",
		// ページネーションのクリック有効
		clickable: true,
	},
	// 画像変更にかかる時間
	speed: 700,
	autoplay: {
		// 画像が止まる時間
		delay: 4000,
		// 操作されても自動再生再開
		disableOnInteraction: false
	}
});