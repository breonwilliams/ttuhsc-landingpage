/*
*** MICROSITE JS ***
*/

// window.jQuery = window.$ = require('jquery-3.2.0.min.js');
//window.owlCarousel = require('owl.carousel.js');

var $body = $('body');

$(document).ready(function(){
	
	microNavToggle();
	microMenuMover();
	featCarouselInit();
	imgGridLeft();

});

$(window).on('load resize',function(){

	microMenuMover();
	imgGridLeft();

	if (window.innerWidth >= 992){
		
	} else {
		
	}
});

function microMenuMover() {
	if (window.innerWidth >= 992){
		$('#utility-container').insertAfter('#logo-container');
		$('#search-container').insertAfter('#school-container');
		
	} else {
		$body.removeClass('resources-nav-open', 'info-for-nav-open', 'give-nav-open' );
		$('#utility-container').appendTo('#micro-nav-container');
		$('#search-container').appendTo('#micro-nav-container');
	}
}

function microNavToggle() {
	$('#toggle-micro-nav').click(function(e) {
        e.preventDefault();
        if (!$body.hasClass('micro-nav-open')) {
        	$(this).html('close x');
        	$body.addClass('micro-nav-open');
        } else {
        	$(this).html('menu');
        	$body.removeClass('micro-nav-open');
        }
    })

	$('#toggle-resources').click(function (e) {
		e.preventDefault();
		$body.toggleClass('resources-nav-open');
		$body.removeClass('info-for-nav-open');
		$body.removeClass('give-nav-open');
	});

	$('#toggle-info-for').click(function (e) {
		e.preventDefault();
		$body.toggleClass('info-for-nav-open');
		$body.removeClass('resources-nav-open');
		$body.removeClass('give-nav-open');
	});

	$('#toggle-give').click(function (e) {
		e.preventDefault();
		$body.toggleClass('give-nav-open');
		$body.removeClass('resources-nav-open');
		$body.removeClass('info-for-nav-open');
	});
}

function featCarouselInit() {
    $('.feat-carousel').owlCarousel({
        loop: true,
        margin: 1,
        autowidth: true,
        autoHeight:true,
        nav: true,
        navText: ["<i class='fa fa-caret-left fa-3x'>", "<i class='fa fa-caret-right fa-3x'>"],
        responsive: {
            0: {
                items: 1
            }
        }
    });
}

function imgGridLeft() {
	if (window.innerWidth <= 991){
		$('.img-grid.left .text-wrap').each(function(){
			$(this).appendTo($(this).parent('.row'));
		});
	} else {
		$('.img-grid.left .text-wrap').each(function(){
			$(this).prependTo($(this).parent('.row'));
		});
	}
}
