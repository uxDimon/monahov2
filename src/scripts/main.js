// Бургер меню
const burgerButton = document.querySelectorAll(".main-menu__burger-button");
const burgerMenu = document.querySelector(".burger-menu");

for (const i of burgerButton) {
	i.addEventListener("click", () => {
		burgerMenu.classList.toggle("burger-menu__is-active");
		for (const b of burgerButton) {
			b.classList.toggle("main-menu__burger-button-cross");
		}
	});
}

// popup
const popupReview = document.querySelector(".popup_review");
const popupSignUp = document.querySelector(".popup_sign-up");

const buttonReview = document.querySelectorAll(".button_review");
const buttonSignUp = document.querySelectorAll(".button_sign-up");

function popupOpen(popup, button) {
	for (const b of button) {
		b.addEventListener("click", () => {
			popup.classList.add("popup_is-active");
		});
	}
	popup.querySelector(".popup__close-area").addEventListener("click", () => {
		popup.classList.remove("popup_is-active");
	});
	popup.querySelector(".popup__close-button").addEventListener("click", () => {
		popup.classList.remove("popup_is-active");
	});
}

popupOpen(popupSignUp, buttonSignUp);
popupOpen(popupReview, buttonReview);

// Табы
const tabsButton = document.querySelectorAll(".about-doctor__tab-button");
const tabsContainer = document.querySelectorAll(".about-doctor__tab-container");

for (const i of tabsButton) {
	i.addEventListener("click", () => {
		for (const b of tabsButton) {
			b.classList.remove("tab-button-active");
		}
		i.classList.add("tab-button-active");

		for (const c of tabsContainer) {
			c.classList.remove("tab-container-active");
		}
		document.querySelector("#" + i.value).classList.add("tab-container-active");
	});
}

// Форма

// настройка select
const allSelect = document.querySelectorAll(".form-bot__form-select");
for (const i of allSelect) {
	i.addEventListener("change", () => {
		if (i.value != "none") {
			i.classList.add("select-on");
			i.nextSibling.classList.remove("input-lable-none");
		}
	});
}

// Маска для телефона
// import IMask from "imask.min.js";
document.querySelectorAll(".phone-mask").forEach((item) => {
	let telMask = IMask(item, {
		mask: "+{7}(000)000-00-00",
	});
	/*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
	telMask.on("accept", function () {
		item.setCustomValidity("Укажите полностью номер телефона.");
	});
	telMask.on("complete", function () {
		item.setCustomValidity("");
	});
});

// Слайдер https://www.npmjs.com/package/tiny-slider

if (document.querySelector(".injury__slider")) {
	var injury = tns({
		container: ".injury__slider",
		items: 2,
		autoWidth: true,
		gutter: 20,
		mouseDrag: true,
		loop: false,
		speed: 300,
		controls: false,
		nav: false,
	});
}

if (document.querySelector(".how-working__slider")) {
	var howWorking = tns({
		container: ".how-working__slider",
		disable: true,
		items: 1,
		autoWidth: true,
		gutter: 250,
		mouseDrag: true,
		loop: false,
		speed: 400,
		controls: false,
		navPosition: "bottom",
		responsive: {
			768: {
				disable: false,
			},
		},
	});
}

if (document.querySelector(".reviews__slider")) {
	var reviews = tns({
		container: ".reviews__slider",
		disable: true,
		items: 1,
		autoWidth: true,
		gutter: 20,
		mouseDrag: true,
		loop: false,
		speed: 350,
		controls: false,
		navPosition: "bottom",
		responsive: {
			768: {
				disable: false,
			},
		},
	});
}

if (document.querySelector(".disease-page__slider")) {
	var diseasePage = tns({
		container: ".disease-page__slider",
		items: 1,
		gutter: 20,
		mouseDrag: true,
		// loop: false,
		speed: 350,
		controlsText: ["", ""],
		navPosition: "bottom",
	});
}
