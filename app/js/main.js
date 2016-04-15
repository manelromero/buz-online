$(document).ready(function (){
	// Burger menu
	$('.burger').click(function() {
		$('#burger-menu').slideToggle(200);
		$('#burger-icon-open').fadeToggle();
		$('#burger-icon-close').fadeToggle();
		$('#wrapper').toggleClass('no-scroll');
	});
	// Option click event handler
	$('.option').click(function() {
		$('.option').removeClass('active');
		$(this).addClass('active');
		$('#burger-icon-open').fadeToggle();
		$('#burger-icon-close').fadeToggle();
		$('#burger-menu').slideToggle(200);
		$('#wrapper').removeClass('no-scroll');
		$('.tab').hide();
		$('#' + this.name).fadeIn(600);
	});


	function pictures() {
		$('#picture').css({
			'background': 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?fit=crop&crop=bottom&w=' + $(window).width() + '&h=' + $(window).height() * 0.4 + '") no-repeat'
		});
	}

	pictures();

	$(window).resize(function(){
		pictures();
	});

	$(window).scroll(function() {
		/* Check the location of each desired element */
		$('.appear').each(function() {
			var bottom_of_object = $(this).offset().top + 100; // $(this).outerHeight() - 50;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it in */
			if(bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'}, 600);
			}
		});
	});

});