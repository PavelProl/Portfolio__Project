$(document).ready(function () {

	// const menuToggle = document.querySelector('.toggle-menu');
	// const mobMenu = document.querySelector('.header-menu');
	// const overlayEl = document.querySelector('#overlay');
	// const bodyEl = document.body;

	// // клик по иконке Гамбургер
	// menuToggle.addEventListener('click', function () {

	// 	this.classList.toggle('active');
	// 	mobMenu.classList.toggle('active');
	// 	overlayEl.classList.toggle('active');
	// 	bodyEl.classList.toggle('noscroll');
	// });

	// // клик по мобильному меню
	// mobMenu.addEventListener('click', function () {
	// 	this.classList.remove('active');
	// 	menuToggle.classList.remove('active');
	// 	overlayEl.classList.remove('active');
	// 	bodyEl.classList.remove('noscroll');
	// });
	// // закрытие моб меню при клике по оверлэю
	// overlayEl.addEventListener('click', function () {
	// 	this.classList.remove('active');
	// 	menuToggle.classList.remove('active');
	// 	mobMenu.classList.remove('active');
	// 	bodyEl.classList.remove('noscroll');

	// });

	// // закрытие моб меню при ресайзе экрана
	// window.addEventListener('resize', function () {
	// 	mobMenu.classList.remove('active');
	// 	menuToggle.classList.remove('active');
	// 	overlayEl.classList.remove('active');
	// 	bodyEl.classList.remove('noscroll');
	// });

	//FORM PLACEHOLDER
	const formInputs = document.querySelectorAll('.form-field');
	for (let item of formInputs) {
		const thisPlaceholder = item.nextElementSibling;

		item.addEventListener('focus', function () {
			thisPlaceholder.classList.add('active');
		});

		item.addEventListener('blur', function () {

			if (item.value == '') {
				thisPlaceholder.classList.remove('active');
			}

		});

	}

	//FORM VALIDATE
	$('#contact-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			theme: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			theme: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		}
	})
















})