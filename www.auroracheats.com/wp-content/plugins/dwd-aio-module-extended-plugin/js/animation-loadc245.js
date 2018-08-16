jQuery(document).ready(function($) {
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-dwd-animation'),
                osAnimationDelay = osElement.attr('data-dwd-animation-delay');

            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;

            osTrigger.waypoint({
                offset: '75%',
                handler: function() {
                    osElement.addClass('animated').addClass(osAnimationClass);
                }
            });

            // fallback to 'bottom-in-view' offset, to make sure element become visible when it's on the bottom of page and other offsets are not triggered
            osTrigger.waypoint({
                offset: 'bottom-in-view',
                handler: function() {
                    osElement.addClass('animated').addClass(osAnimationClass);
                }
            });

        });
    }
    onScrollInit($('.dwd-animation'));

    if ($('body').hasClass("dwd-body")) {
        if ($('.et_pb_row').hasClass("et_pb_equal_columns")) {
            $('.dwd-aio').closest('.et_pb_column').addClass('dwd-equal-height');
        }
    }
    var deviceAgent = navigator.userAgent.toLowerCase(),
        detechMobile = deviceAgent.match(/(safari|iphone|ipod|ipad)/);

    if (detechMobile) {
        $('.dwd-aio').each(function(index, value) {
            $(this).addClass('dwd-cover-featured-image');
        });

    }

});