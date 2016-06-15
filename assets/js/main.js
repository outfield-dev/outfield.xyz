$(document).ready(function () {
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

	// using jQuery
	function getCookie(name) {
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
					var cookies = document.cookie.split(';');
					for (var i = 0; i < cookies.length; i++) {
							var cookie = jQuery.trim(cookies[i]);
							// Does this cookie string begin with the name we want?
							if (cookie.substring(0, name.length + 1) == (name + '=')) {
									cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
									break;
							}
					}
			}
			return cookieValue;
	}
	var csrftoken = getCookie('csrftoken');

	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}

	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});
});
