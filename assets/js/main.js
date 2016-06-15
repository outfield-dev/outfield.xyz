(function () {
	// initialise
	if ($(window).width() < 800) {
		$('.half').addClass('m');
		$('.third').addClass('m');
	} else {
		$('.half').removeClass('m');
		$('.third').removeClass('m');
	}

	// respond
	$(window).on('resize', function () {
		if ($(window).width() < 800) {
			$('.half').addClass('m');
			$('.third').addClass('m');
		} else {
			$('.half').removeClass('m');
			$('.third').removeClass('m');
		}
	});
})();
