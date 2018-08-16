jQuery(document).ready(function($) {
    var slicey = $(".dwd-fwe.dwd-slicey-blury"),
        sliceywrap = $(".dwd-slicey-wrap.dwd-slicey-type-one"),
        scrollMagicController = new ScrollMagic.Controller();

    $(slicey).each(function(index, value) {
        var $thisection = this;
        sliceyboxone = $(".dwd-slicey-type-one .dwd-slicey-box", value),
            tween = TweenMax.staggerTo(sliceyboxone, 1.2, { force3D: false, scale: 1.1, autoAlpha: 1, delay: 0.1, ease: Power4.easeOut }, 0.2),
            scene = new ScrollMagic.Scene({
                triggerElement: $thisection,
                offset: 200
            })
            .setTween(tween)
            .addTo(scrollMagicController);
    });

    if ($('.dwd-fwe.dwd-slicey-blury .dwd-slicey-wrap').hasClass("dwd-slicey-type-two")) {
        $.fn.parallax = function(resistance, mouse) {
            $el = $(this);
            TweenLite.to($el, 1, {
                x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
                y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
            });

        };
        TweenMax.to(".dwd-fwe.dwd-slicey-blury .dwd-slicey-type-two .dwd-slicey-box-one", 1, { force3D: false, autoAlpha: 0.2, delay: 0.1, ease: Power4.easeOut, x: "-15" });
        TweenMax.to(".dwd-fwe.dwd-slicey-blury .dwd-slicey-type-two .dwd-slicey-box-two", 1.5, { force3D: false, autoAlpha: 0.2, delay: 0.15, ease: Power4.easeOut, x: "-30" });
        $(document).mousemove(function(e) {
            $('.dwd-slicey-wrap.dwd-slicey-type-two .dwd-slicey-box-one').parallax(20, e);
            $('.dwd-slicey-wrap.dwd-slicey-type-two .dwd-slicey-box-two').parallax(40, e);
        });
    }

});