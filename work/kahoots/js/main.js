$(function() {

    /* Nav 
       ----------------------------------------------*/

       $('#hamburger').click(function(){
            if ( $('#hamburger').hasClass('hide') ) {
                $('#navbar-right').slideDown();
                $('#hamburger').removeClass('hide');
                $('#hamburger svg').css('stroke','#5B95CE');
            }
            else {
                $('#navbar-right').slideUp();
                $('#hamburger').addClass('hide');
                $('#hamburger svg').css('stroke','#666666');
            }
       })

        $(window).on('resize', function(){
                if ($(window).width() > 730) {
                    $('#navbar-right').show();
                    $('#hamburger').addClass('hide');
                }
                else {
                    if ( $('#hamburger').hasClass('hide') ) {
                        $('#navbar-right').hide();
                    }
                    else {
                        $('#navbar-right').show();
                    }
                }
        });


    /* Show iPhone in #screens_section
       -----------------------------------------------------*/
    var showiPhone = function() {
        // Top distance to #screens_section
        var distance = $('#screens_section').offset().top;
        var distance_testimonials = $('#testimonials_section').offset().top-740;

        var dy = $(window).scrollTop(); // current vertical distance from top of page

        if (dy > distance && dy < distance_testimonials) {
            $('#iphone').css({'position': 'fixed', 'top': '110px'});
        } else if (dy < distance) {
            $('#iphone').css({'position': 'relative', 'top': '110px'});
        }
        else {
            $('#iphone').css({'position': 'relative', 'top': '1260px'});
        }
    };

    /* Swap screens in #iphone upon scroll
       -----------------------------------------------------*/
    var swapScreens = function() {
        
        var screenTwoDistance = $('#screens_section').offset().top + 390;
        var screenThreeDistance = $('#screens_section').offset().top + 870;

        var dy = $(window).scrollTop(); // current vertical distance from top of page

        if (dy > screenTwoDistance && dy < screenThreeDistance) {
            $('#screen-1').css({opacity: 0});
            $('#screen-3').css({opacity: 0});
            $('#screen-2').css({opacity: 1});

            $('#block-1').css({opacity: 0});
            $('#block-3').css({opacity: 0});
            $('#block-2').css({opacity: 1});
        } else if (dy > screenThreeDistance) {
            $('#screen-1').css({opacity: 0});
            $('#screen-2').css({opacity: 0});
            $('#screen-3').css({opacity: 1});

            $('#block-1').css({opacity: 0});
            $('#block-2').css({opacity: 0});
            $('#block-3').css({opacity: 1});
        } else {
            $('#screen-1').css({opacity: 1});
            $('#screen-2').css({opacity: 0});
            $('#screen-3').css({opacity: 0});

            $('#block-1').css({opacity: 1});
            $('#block-2').css({opacity: 0});
            $('#block-3').css({opacity: 0});
        }

    };    
   

    // Run functions upon scrolling
    $(window).scroll(function() {
        showiPhone();
        swapScreens();
    });


    /* Animated headline (Find your _____'s favorite _____)
       -----------------------------------------------------*/
    var animationDelay = 2500,
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();
    
    function initHeadline() {
        //insert <i> element for each letter of a changing word
        //initialise headline animation
        animateHeadline($('.headline'));
    }
     
    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function(){
            var headline = $(this);
            
            if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.words-wrapper'),
                newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            };

            //trigger animation
            setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);
        $word.parents('.words-wrapper').animate({ width : '2px' }, revealDuration, function(){
            switchWord($word, nextWord);
            showWord(nextWord);
        });
    }

    function showWord($word, $duration) {
        $word.parents('.words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
            setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
        });
    }
     
    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }
     
    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').css('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }


    /* Animated service icons
       -----------------------------------------------------*/
    var $icons = $('.service-icon'), counter = 1;

    setInterval(function(){

      $icons.animate({opacity:0}, 500);
      $icons.eq(counter++ % $icons.length).animate({opacity:1}, 500);

    }, 2700);


    /* Video Modal
       -----------------------------------------------------*/
    var videoModal = function() {

    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    };

    videoModal();

});