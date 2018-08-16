jQuery(function($) {
    var aiotarget = $('.dwd-aio'),
    aiotextillate = $('.dwd-aio.et_pb_textillate_effect').not('.dwd-hide-content'),
    aiohover = $('.dwd-hide-content');
    $(aiotextillate).each(function(index, value) {
        var textillateelement = $('.tlt', value);
        $(this).waypoint(function() {
            $(textillateelement).textillate({
                // enable looping
                loop: true,
                // sets the minimum display time for each text before it is replaced
                minDisplayTime: 1000,
                // sets the initial delay before starting the animation
                // (note that depending on the in effect you may need to manually apply 
                // visibility: hidden to the element before running this plugin)
                initialDelay: 10,
                // set whether or not to automatically start animating
                autoStart: true
            });
        }, {
            offset: '100%'
        });
    });
    $(aiohover).each(function(index, value) {
        var textillateelement = $('.tlt', value);
        $(this).hover(
            function() {
                $(textillateelement).textillate({
                    // enable looping
                    loop: true,
                    // sets the minimum display time for each text before it is replaced
                    minDisplayTime: 1000,
                    // sets the initial delay before starting the animation
                    // (note that depending on the in effect you may need to manually apply 
                    // visibility: hidden to the element before running this plugin)
                    initialDelay: 10,
                    // set whether or not to automatically start animating
                    autoStart: true
                });
            },
            function() {
                $(textillateelement).textillate('stop');
            }
        )
    });
});