$(document).ready(function() {

	mainNavToggle();
	subNavToggle();
	moveGhostLabel();
	mobileMenu();
	carouselInit();

	$('#menu-btn').on('click',function(e){

	  e.preventDefault();
	  var $this = $(this);

	  if (!$this.hasClass('open')){
		$('#nav-container').slideDown();
		$this.addClass('open');
		$this.html('close x')
	  } else {
		$('#nav-container').slideUp();
		$this.removeClass('open');
		$this.html('menu <span class="fa fa-bars"></span>')
	  }
	  
	});

	$('.dropdown-toggle').on('click', function() {
		$(this).sibling('.dropdown-content').slideToggle();
	});

	$('.accordion-link').click( function(event) {
    	event.preventDefault(); //PK: works on Mac firefox, didn't work on KS' Linux (VM) Firefox
	});

}); 

$(window).on('load', function() {
	
});

$(window).on('resize', function() {
	mobileMenu();
	mainNavToggle();
});


function mainNavToggle() {
	// Main navigation submenu events
	var navItems = $('.main-nav h2');
	function submenuMobile(){
		navItems.removeClass('opened');
		navItems.off();
		navItems.on('click',function(){

			var $this = $(this);

			if(!$this.hasClass('opened')) {
				$this.siblings('.menu').slideDown(400); // 300
				$this.addClass('opened');
			} else {
				$this.siblings('.menu').slideUp(400); // 300
				$this.removeClass('opened');
			}

		});
	}

	function submenuDesktop(){
		navItems.addClass('opened');
		navItems.off();
	}

	if(window.innerWidth <= 992){
		submenuMobile();
	} else {
		submenuDesktop();
	}
}

function subNavToggle() {
	$('#subnav-toggle').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('sub-nav-open');
	});

	$('.list-toggle').click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('list-item-open');
	});
}

function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-plus glyphicon-minus');
}

function moveGhostLabel() {
	//for standard inner forms
	$('.ghost fieldset').each(function() {

		$('input', this).focus(function() {
			$(this).next('label').addClass('focus');
		});

		$('input', this).blur(function() {
			if ($(this).val() == '') {
				$(this).next('label').removeClass('focus');
			}
		});
	});
}

function mobileMenu(){
	if(window.innerWidth <= 992){
		$('#global-search').appendTo('#nav-container');
	} else {
		$('#global-search').prependTo('#header-menu');
	}
}

function carouselInit() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 1,
		autowidth: true,
		nav: true,
		navText: ["<i class='fa fa-caret-left fa-3x'>", "<i class='fa fa-caret-right fa-3x'>"],
		responsive: {
			0: {
				items: 1
			}
		}
	});

	$('.photo-gallery').owlCarousel({
		loop: true,
		margin: 1,
		autowidth: true,
		nav: true,
		navText: ["<i class='fa fa-caret-left fa-3x'>", "<i class='fa fa-caret-right fa-3x'>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});
}