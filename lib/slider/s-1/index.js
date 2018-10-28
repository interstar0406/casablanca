$(function() {
    if ($('.canhcam-slider-1 .owl-carousel').length) {
		$('.canhcam-slider-1 .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            padding: 0,
            margin: 0,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: false,
			dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
			callbacks: true,
        });
    }
	$('.canhcam-slider-1 .mouse').on('click',function(){
		
	})
});
$(".canhcam-slider-1 a").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 500, function() {
			window.location.hash = hash;
		});
	}
	$('.navbar-collapse').removeClass('show')
});
