$(document).ready(function () {
	// initialise
	if ($(window).width() < 800) {
		$('.half').addClass('m');
		$('.third').addClass('m');
		$('#branding-heads-up').css({'background': 'url("/static/home/img/banner.jpg") no-repeat center center'});
	} else {
		$('.half').removeClass('m');
		$('.third').removeClass('m');
		$('#branding-heads-up').css({'background': 'url("/static/home/img/banner.jpg") no-repeat center center fixed'});
	}

	// respond
	$(window).on('resize', function () {
		if ($(window).width() < 800) {
			$('.half').addClass('m');
			$('.third').addClass('m');
			$('#branding-heads-up').css({'background': 'url("/static/home/img/banner.jpg") no-repeat center center'});
		} else {
			$('.half').removeClass('m');
			$('.third').removeClass('m');
			$('#branding-heads-up').css({'background': 'url("/static/home/img/banner.jpg") no-repeat center center fixed'});
		}
	});

	$('#contact-form').find('.btn').click(function (event) {
		// prevent it from submitting email
		event.preventDefault();

		// send email via ajax
		var formData = {
			'name': $('input#name').val(),
			'email': $('input#email').val(),
			'message': $('textarea#message').val(),
		};

		$.ajax({
			type: 'post', // define the type of HTTP verb we want to use (POST for our form)
			url: '/email/', // the url where we want to POST
			data: formData, // our data object
			dataType: 'json', // what type of data do we expect back from the server
			encode: true,
		})

		// clear fields
		$('input#name').val('');
		$('input#email').val('');
		$('textarea#message').val('Thanks for getting in touch. Someone will respond to your enquiry soon!');
	});

	$.ajaxSetup({
		headers: { "X-CSRFToken": Cookies.get("csrftoken") }
	});
});
