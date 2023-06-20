import 'flowbite';
import $ from "jquery";
import slick from 'slick-carousel';

$(function() {
    const breakpoints = {
        md: 767,
        lg: 1023,
        xl: 1279,
        xxl: 1536
    }

    $('#ht-carousel').slick({
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        draggable: true,
        infinite: false,
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: breakpoints.lg,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: breakpoints.xl,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });
});
