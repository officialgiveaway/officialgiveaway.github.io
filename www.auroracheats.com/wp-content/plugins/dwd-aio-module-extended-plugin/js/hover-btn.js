jQuery(document).ready(function($) {
    var aio = $('.dwd-aio').length;
    for (i = 0; i < aio; i++) {
        var btn = $(".et_pb_aio_extended_" + i + " a.et_pb_button");
        $(btn).hover(function(){ 
           if ($(this).hasClass('animated')){
              $(this).removeClass('animated')
           }
           if ($(this).hasClass('dwd-animation')){
              $(this).removeClass('dwd-animation')
           }
        })
    }
});
