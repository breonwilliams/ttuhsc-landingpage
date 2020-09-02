function slantHeightDesk() {
	$('.slant-02').each(function(){

		var $this = $(this),
			containerHeight = $this.parents('.slant-container').height(),
			newSlantHeight = containerHeight + (containerHeight / 1.5),
			newSlantTop = -Math.abs(containerHeight / 2.5);
	
		$this.children('.img-wrap').removeClass('mobile').attr('style','');
		$this.height(newSlantHeight);
		$this.css('top',newSlantTop);

	});
}

function slantHeightMobile() {

	var slantTwos = $('.slant-02'),
	    slantTwosArr = [];

	slantTwos.each(function(){
	  slantTwosArr.push($(this));
	});

	for (var i = 0; i < slantTwosArr.length; i++){
		
		var $this = slantTwosArr[i]
			containerHeight = $this.siblings('.slant-01').height(),
			newSlantHeight = containerHeight + (containerHeight / 1.5),
			newSlantTop = -Math.abs(containerHeight / 1.9),
			bgSrc = $this.find('img').attr('src');

			if (window.innerWidth <= 550){
				newSlantHeight = containerHeight + (containerHeight / 1.2),
				newSlantTop = -Math.abs(containerHeight / 1.6);
			}

		$this.children('.img-wrap').addClass('mobile').attr('style','background-image:url("'+ bgSrc +'");background-size:cover;background-blend-mode:multiply;');
		$this.height(newSlantHeight);
		$this.css('top',newSlantTop);

		// $this.children('.img-wrap').width(window.innerWidth + 'px');

	}

}

function hoverSlide(){
	$('.hover-slide').hover(function(){
		var imgSrc = $(this).children('a').attr('data-src');
		$('#hover-slide').attr('src',  imgSrc );
		$(this).toggleClass('active');
	});
}

function hoverDropdown(){

	var hoverSlide = $('.hover-slide'),
		hoverSlideWrap;

	if (window.innerWidth <= 991){

		if (!$('#hover-slide-wrap').length){
			hoverSlide.wrapAll('<div id="hover-slide-wrap" class="container-fluid"></div>');
			hoverSlideWrap = $('#hover-slide-wrap');
		}

		$('.hover-dropdown').on('click',function(e){
			e.preventDefault();
			
			if( hoverSlideWrap.hasClass('reveal') ) {
				hoverSlideWrap.removeClass('reveal')
				$('.hover-dropdown a').removeClass('changed')
				hoverSlideWrap.slideUp();
				hoverSlide.slideUp();
			} else {
				console.log('true')
				hoverSlideWrap.addClass('reveal')
				$('.hover-dropdown a').addClass('changed');
				hoverSlideWrap.slideDown();
				hoverSlide.slideDown();
			}
		});

	} else {

		hoverSlide.unwrap('#hover-slide-wrap');
		hoverSlide.show();
		$('.hover-dropdown').off();

	}

}

function forIE10() {
	//https://css-tricks.com/ie-10-specific-styles/
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
}

$(document).ready(function(){
	forIE10();
	hoverSlide();
	hoverDropdown();
	if (window.innerWidth >= 992){
		slantHeightDesk();
	} else {
		slantHeightMobile();
	}
});

$(window).on('load resize',function(){
	if (window.innerWidth >= 992){
		slantHeightDesk();
	} else {
		slantHeightMobile();
	}
});

$(window).on('resize',function(){
	hoverDropdown();
});