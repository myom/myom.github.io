$(document).ready(function(){

// ALL SAME PAGE LINKS
$('a[href^="#"]').click(function(e){
	e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({'scrollTop': $target.offset().top}, 900, 'swing', function () {
        window.location.hash = target;
    });
});

// SERVICES SLIDESHOW

var timer;

$('.services').click(function(){
	$('.services').find('h2').removeClass('active-header');
	$(this).find('h2').addClass('active-header');
	$('.services').find('p').removeClass('active-text');
	$(this).find('p').addClass('active-text');
	$('.services').find('.dot').removeClass('active-dot');
	$(this).find('.dot').addClass('active-dot');

	var index = $('.services').index(this);

	if ( index == 0 ) {
		$('.animation').find('img').css('opacity','0');
		$('#animation-1').css('opacity','1');
		clearTimeout(timer);
		timer = setTimeout(function(){
			$('.services').eq(1).trigger('click');
		}, 5000);
	}
	else if ( index == 1 ) {
		$('.animation').find('img').css('opacity','0');
		$('#animation-2').css('opacity','1');
		clearTimeout(timer);
		timer = setTimeout(function(){
			$('.services').eq(2).trigger('click');
		}, 5000);
	}
	else if ( index == 2 ) {
		$('.animation').find('img').css('opacity','0');
		$('#animation-3').css('opacity','1');
		clearTimeout(timer);
		timer = setTimeout(function(){
			$('.services').eq(0).trigger('click');
		}, 5000);
	}

});

$('.services').eq(0).trigger('click');


// HAMBURGER NAV 

$('#hamburger').click(function(){
	console.log('hamburger clicked');
	if (!$('header .nav-right').hasClass('show-nav')) {
		$('header .nav-right, .nav-buttons').addClass('show-nav');
		$('header .nav-right, .nav-buttons').slideDown();
	}
	else {
		$('header .nav-right, .nav-buttons').removeClass('show-nav');
		$('header .nav-right, .nav-buttons').slideUp();
	}
})

$('header li a, .nav-cta').click(function(){
	if ( $('#hamburger').css('display') == 'block' ) {
		$('header .nav-right, .nav-buttons').removeClass('show-nav');
		$('header .nav-right, .nav-buttons').slideUp();
	};
})

$(window).on('resize', function(){
    if ($(window).width() >= 728) {
        $('header .nav-right, .nav-buttons').show();
        $('#hamburger').hide();
    }
    else {
		$('header .nav-right, .nav-buttons').hide();
		$('header .nav-right, .nav-buttons').removeClass('show-nav');
		$('#hamburger').show();
    }
});


}); //Jquery