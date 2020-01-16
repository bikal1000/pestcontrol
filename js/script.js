$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();

		if ( top > batas ) {
			jQuery('.main-navbar').addClass('stiky');
		}else {
			jQuery('.main-navbar').removeClass('stiky'); 
		}
	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
	  animation: "fade",
	  play: 5000,
	  slide_speed: 800,
	  pagination: false,
	  hashchange: false,
	  scrollable: true
	});
	// var banner = $("#banner");
	// banner.owlCarousel({
	// 	items: 1,
	// 	autoplay: true,
	// 	autoplayTimeout: 5000,
	// 	autoplayHoverPause: true,
	// 	loop: true,
	// 	nav:false,
	// 	dots: false,
	// });
	// 
	// var slide = banner.find('.item');
	// slide.each(function(){
	// 	var src = $(this).find('img').attr('src');
	// 	$(this).css({
	// 		'background-image': 'url(' + src + ')',
	// 		'height' : jQuery(window).height()
	// 	});
	// });
	
	
	/* =================================
	OWL
	=================================== */
	
	var about = $("#about-caro");
	about.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true
	});
	
	var owl = $("#owl-testimonial");
	owl.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 3,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: false,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});
	
	/* =================================
	FAQ
	=================================== */
	$('.panel-heading a').on('click', function() {
		$('.panel-heading').removeClass('active');
		$(this).parents('.panel-heading').addClass('active');
	});
});




  
  