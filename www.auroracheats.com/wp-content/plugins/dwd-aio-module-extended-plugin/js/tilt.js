(function($){
	const tilt = $('.dwd-aio.dwd-tilt').tilt();
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		if ( $('.dwd-aio').hasClass("dwd-tilt") ) {
			$('.dwd-aio.dwd-tilt').parent().css('transform','translateZ(-100px)');
		}
	}
})(jQuery);
