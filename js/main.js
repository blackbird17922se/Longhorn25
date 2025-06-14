(function ($) {
	"use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	/*----------------------------
	 jQuery myTab
	------------------------------ */
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab3 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab4 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('#single-product-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('[data-toggle="tooltip"]').tooltip();


	// sidebarCollapse: idnetificador del boton que expande o contrae la barra
	// sidebar: barra lateral
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');

	});
	// Collapse ibox function
	$('#sidebar ul li').on('click', function () {
		var button = $(this).find('i.fa.indicator-mn');
		button.toggleClass('fa-plus').toggleClass('fa-minus');

	});
	/*-----------------------------
			Menu Stick
		---------------------------------*/
	$(".sicker-menu").sticky({ topSpacing: 0 });

	$('#sidebarCollapse').on('click', function () {
		$("body").toggleClass("mini-navbar");
		SmoothlyMenu();
	});
	$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
		e.stopPropagation();
	});

	/****************************************** CONTROLES MENU DE INICIO ********************************/

	const menuBtn = document.getElementById('menuCollapse');
	const menuBox = document.getElementById('box-menu-ini');



	menuBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		menuBox.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!menuBox.contains(e.target) && e.target !== menuBtn) {
			menuBox.classList.remove('active');
		}
	});


	/** ********** ICONO SUPERIOR MENU INICIO DINAMICO***************** */
	const items = document.querySelectorAll('.menu-left-section .item');
	const imgUser = document.querySelector('.imgUser');
	const defaultImg = 'img/userImg/airplane.bmp'; // Imagen por defecto

	items.forEach(item => {
		item.addEventListener('mouseenter', () => {
			const newImg = item.getAttribute('data-img');
			imgUser.src = newImg;
		});

		item.addEventListener('mouseleave', () => {
			imgUser.src = defaultImg;
		});
	});


	//   RELOJ


	function updateClock() {
		const now = new Date();

		// Reloj de manecillas
		const second = now.getSeconds();
		const minute = now.getMinutes();
		const hour = now.getHours();
		const secondDeg = second * 6;
		const minuteDeg = minute * 6 + second * 0.1;
		const hourDeg = (hour % 12) * 30 + minute * 0.5;

		document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
		document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
		document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;

		// Reloj digital
		const ampm = hour >= 12 ? 'PM' : 'AM';
		const hour12 = hour % 12 || 12;
		const paddedMin = String(minute).padStart(2, '0');
		document.getElementById("digital-time").textContent = `${hour12}:${paddedMin} ${ampm}`;

		// Fecha (formato español)
		const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
		const mes = meses[now.getMonth()];
		const dia = now.getDate();
		document.getElementById("date").textContent = `${mes} ${dia}`;
	}

	setInterval(updateClock, 1000);
	updateClock();

	// setInterval(updateClock, 1000);
	// updateClock();


	/****************** FUNCIONALIDADES DEL MODAL ********************************/
	 /** FUNCIONALIDAD DEL MODAL DE MI PC */
	document.querySelector('[data-app="my-pc"]').addEventListener("click", function () {
		document.getElementById("mi-pc-modal").style.display = "flex";
		menuBox.classList.remove('active');
	});

	document.getElementById("close-mi-pc").addEventListener("click", function () {
		document.getElementById("mi-pc-modal").style.display = "none";
	});


	/** FUNCIONALIDAD DEL MODAL DE CONTACTOS */
	// Cerrar y abrir el modal de contactos
	document.querySelector('[data-app="contacts"]').addEventListener("click", function () {
		document.getElementById("contact-modal").style.display = "flex";
		menuBox.classList.remove('active');
	});

	document.getElementById("close-contact").addEventListener("click", function () {
		document.getElementById("contact-modal").style.display = "none";
	});

	// RESTAURAR
	document.getElementById('restore-contact').addEventListener('click', () => {
		const modal = document.getElementById('contact-modal');
		modal.classList.toggle('restored');
	});





	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();

	/*----------------------------
	 owl active
	------------------------------ */
	$("#owl-demo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */
	$("#slider-range").slider({
		range: true,
		min: 40,
		max: 600,
		values: [60, 570],
		slide: function (event, ui) {
			$("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
		}
	});
	$("#amount").val("£" + $("#slider-range").slider("values", 0) +
		" - £" + $("#slider-range").slider("values", 1));

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

})(jQuery); 