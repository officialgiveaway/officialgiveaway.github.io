(function($) {
    'use strict';
    var particleselector = $(".dwd-fwe.dwd-fullwidth-particles");
    $(particleselector).each(function(index, value) {
        var start = index + 1,
            particlesid = $("#dwd-particles-js-" + start + ""),
            particlesids = "dwd-particles-js-" + start,
            particlesitemnumber = $(particlesid).data('particles-value'),
            particlesitemcolor = $(particlesid).data('particles-color'),
            particlesitemcolorlink = $(particlesid).data('particles-color-link'),
            particlesitemspeed = $(particlesid).data('particles-speed'),
            particlesitemsize = $(particlesid).data('particles-size'),
            particlesitemwidth = $(particlesid).data('particles-width'),
            particlesitemshape = $(particlesid).data('particles-shape'),
            particlesitemimg = $(particlesid).data('particles-img'),
            particlesitemimgwidth = $(particlesid).data('particles-img-width'),
            particlesitemimgheight = $(particlesid).data('particles-img-height'),
            particlesitemdirection = $(particlesid).data('particles-direction'),
            particlesitemhover = $(particlesid).data('particles-hover'),
            particlesitemgrablink = $(particlesid).data('particles-hover-link'),
            colorsOnly = particlesitemcolorlink.substring(particlesitemcolorlink.indexOf('(') + 1, particlesitemcolorlink.lastIndexOf(')')).split(/,\s*/),
            red = colorsOnly[0],
            green = colorsOnly[1],
            blue = colorsOnly[2],
            colorlinkopacity = colorsOnly[3];

        function rgb2hex(rgb) {
            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (rgb && rgb.length === 4) ? "#" +
                ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
        }

        //var rgbatohex = rgb2hex(particlesitemcolorlink);
        console.log(particlesitemcolorlink);

        if (particlesitemwidth == 0) {
            var line_linked = false;
        } else {
            var line_linked = true;
        }

        particlesJS(particlesids, {
            "particles": {
                "number": {
                    "value": particlesitemnumber,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": particlesitemcolor
                },
                "shape": {
                    "type": particlesitemshape,
                    "stroke": {
                        "width": 0,
                        "color": particlesitemcolor
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": particlesitemimg,
                        "width": particlesitemimgwidth,
                        "height": particlesitemimgheight
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": particlesitemsize,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": line_linked,
                    "distance": 150,
                    "color": particlesitemcolorlink,
                    "opacity": 0.5,
                    "width": particlesitemwidth
                },
                "move": {
                    "enable": true,
                    "speed": particlesitemspeed,
                    "direction": particlesitemdirection,
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": particlesitemhover
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": particlesitemgrablink
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    });

})(jQuery);