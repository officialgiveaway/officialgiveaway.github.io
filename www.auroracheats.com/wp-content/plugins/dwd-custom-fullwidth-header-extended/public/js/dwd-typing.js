(function($) {
    var fhetyping = $('.dwd-fwe.et_pb_typing_effect');
    $(fhetyping).not('.dwd-sm-fade').each(function(index, value) {
        var $this = $(this),
            $textforscroll = $(".dwd-typed", value).text(),
            typingspeed = $(".et_pb_header_description", value).data('typing-speed'),
            startdelay = $(".et_pb_header_description", value).data('typing-delay'),
            backdelay = $(".et_pb_header_description", value).data('typing-backdelay'),
            typingloop = $(".et_pb_header_description", value).data('typing-loop'),

            typingelement = $(".dwd-typing", value),
            arr = $textforscroll.split('|');
            if (typeof $this.find('.et_pb_module_header').data('title-delay') !== 'undefined') {
            var titledelay = $(".et_pb_header_description .et_pb_module_header", value).data('title-delay'),
            ms = titledelay * 1000;
        } else {
            ms = 0;
        }
        setTimeout(function() {
            $(typingelement).typed({
                strings: arr,
                startDelay: startdelay,
                loop: typingloop,
                typeSpeed: typingspeed,
                backDelay: backdelay,
                contentType: 'text',
                callback: function() {
                    if ($(".et_pb_header_description", value).attr('data-typing-loop') === 'false' && $(".et_pb_header_description", value).attr('data-typing-cursor') === 'true') {
                        $(".typed-cursor", value).hide();
                    }
                }
            });
        }, ms);
    });
})(jQuery);