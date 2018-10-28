function CCHeader2() {
	$('.canhcam-header-2 .navbar-toggler').on("click", function () {
		$('.canhcam-header-2').toggleClass('expand');
	});
};
$(function () {
	CCHeader2();
})

$(window).resize(function () {
})
$("header a").on('click', function(event) {
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
