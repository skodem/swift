$(document).ready()
$(window).on('load', function() {

	$('.flexslider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false
	});

	$('.blogslider').flexslider({
		animation: "slide",
		slideshow: false,
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a")
	});

});

$(window).scroll(function(){
	if ( $(this).scrollTop() > 117 ) {
		$('.ul').addClass('fixed');
	} else {
		$('.ul').removeClass('fixed');
	}
});

$(document).ready(function(){
	$(".left_menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
