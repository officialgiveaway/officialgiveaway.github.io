(function($) {
    $.fn.parallax = function(resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
            x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
            y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
        });

    };
    var interactive = $(".dwd-fwe.dwd-interactive .dwd-interactive-bg"),
        interactivecontent = $(".dwd-fwe.dwd-interactive .header-content"),
        interactiveimage = $(".dwd-fwe.dwd-interactive .header-image"),
        sliceyinteractive = $(".dwd-fwe.dwd-slicey-blury.dwd-interactive .dwd-interactive-bg"),
        sliceyinteractivecontent = $(".dwd-fwe.dwd-slicey-blury.dwd-interactive .header-content"),
        sliceybox = $(".dwd-fwe.dwd-slicey-blury .dwd-slicey-box");
    $(interactive).each(function(index, value) {
        $(document).mousemove(function(e) {
            if ($(window).width() > 768) {
                $(value).parallax(-30, e);
                $(interactivecontent, value).parallax(150, e);
                $(interactiveimage, value).parallax(150, e);
                if ($('.dwd-fwe.dwd-slicey-blury.dwd-interactive')) {
                    $(sliceyinteractivecontent, value).parallax(150, e);
                    $(sliceyinteractive, value).parallax(0, e);
                    $(sliceybox, value).parallax(-30, e);
                }
            }
        });
    });
}(jQuery));