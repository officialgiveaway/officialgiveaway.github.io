(function($) {
    var $this_section = $('section.et_pb_fullscreen'),
        $header = $this_section.children('.et_pb_fullwidth_header_container'),
        $header_content = $header.children('.header-content-container'),
        $header_image = $header.children('.header-image-container');
    if ($header.hasClass('center') && $header_content.hasClass('top') && !$header_image.length) {
        $header_content.find('.header-content').css('margin-top', 80 + 'px');
    }

    if ($header_content.hasClass('top') && $header_image.hasClass('center')) {
        $header_image.find('.header-image').css('margin-top', 80 + 'px');
        $header_image.css('align-self', 'flex-start');
    }
})(jQuery)
