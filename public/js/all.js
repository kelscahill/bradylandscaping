(function($) {
	$('.gallery__images').mixItUp({
		animation: {
			enable: false
		}
	});
	$('.gallery__images a').fancybox();

	// Mobile Navigation
	$('.trigger').click(function() {
		$(this).toggleClass('active');
		$('.mobile-nav').toggleClass('active');
	});
	$('.mobile-nav a').click(function() {
		$('.mobile-nav, .trigger').removeClass('active');
	});
})(jQuery);
