$(document).ready(function (){
  // Activate home tab
  $('#home').fadeIn(500);
	// Burger menu
	$('.burger').click(function() {
		$('.burger-menu').slideToggle(300);
		$('#burger-icon-open').fadeToggle();
		$('#burger-icon-close').fadeToggle();
		$('#wrapper').toggleClass('no-scroll');
	});
	// Burger menu option click event handler
	$('.burger-menu a').click(function() {
		$('#burger-icon-close').fadeToggle();
		$('#burger-icon-open').fadeToggle();
		$('.burger-menu').slideToggle(300);
		$('#wrapper').removeClass('no-scroll');
		var newTab = this.name;
    $('.tab').fadeOut(200).promise().done(function() {
    	$('#' + newTab).fadeIn(500);
    });
	});
	// Menu option click event handler
	$('.menu a').click(function() {
		var newTab = this.name;
    $('.tab').fadeOut(500).promise().done(function() {
    	$('#' + newTab).fadeIn(500);
    });
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
