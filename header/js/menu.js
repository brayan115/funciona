$(fuction(){

	var header = document.getElementsById('header');
	var headroom = new Headroom(header);
	headroom.init();
	//menu responsive
	//calculamos ancho de pagina

	var ancho = $(window),width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono  = $('#btnMenu .icono');
if (ancho = 700) {
			enlaces.hide();
			icono.addClass('fa-bars');
		}
		
		btnMenu.on('click', fuction(e){
			enlaces.slideToggle();
			icono.toggleClass('fa-bars');
			icono.toggleClass('fa-times');

		});

});