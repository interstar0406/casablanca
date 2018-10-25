$(function() {
    if ($('.canhcam-carousel-2 .owl-carousel').length) {
        $('.canhcam-carousel-2 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: true,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                }
            }
        });
    }

});
