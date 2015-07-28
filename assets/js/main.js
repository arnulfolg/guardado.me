$(document).ready(function () {

	$(this).find('.previo-overlay').stop(true, true).fadeOut(400);

	$(document).on('mouseenter', '.titulo1 .interno', function() {
		$(this).find('.previo-overlay').stop(true, true).fadeIn(400);
	});

	$(document).on('mouseleave', '.titulo1 .interno', function() {
		$(this).find('.previo-overlay').stop(true, true).fadeOut(400);
	});

	if ($('.ser-animado').length > 0) {

		$('.ser-animado').each(function(i, item) {

			var item = $(item);

			if ( item.is(":visible") ) {
				item.addClass("already-visible");
				item.addClass('desvanecer');
				item.addClass('animado');
			}
		}
		);
	}

});
