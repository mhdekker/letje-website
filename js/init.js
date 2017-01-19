(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 250) {
    $('#hideBeforeScroll').fadeIn();
  } else {
    $('#hideBeforeScroll').fadeOut();
  }
});

$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});
