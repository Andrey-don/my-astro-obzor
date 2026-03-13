;// Themify Theme Scripts - https://themify.me/

// Initialize object literals
var FixedHeader = {};

/////////////////////////////////////////////
// jQuery functions
/////////////////////////////////////////////
(function($){

	// Test if this is a touch device /////////
	function is_touch_device() {
		return Themify.body.hasClass('touch');
	}

	// Fixed Header /////////////////////////
	FixedHeader = {
                header:null,
		init: function() {
			if( $('#headerwrap').length===0 ){
                            return;
                        }
			this.header = $('#header');
			$(window).on('scroll touchstart.touchScroll touchmove.touchScroll', this.activate);
		},
		activate: function() {
			var $window = $(window),
                            scrollTop = $window.scrollTop();
			if ( scrollTop > FixedHeader.header.offset().top ) {
				FixedHeader.scrollEnabled();
			} else if ( (scrollTop + $window.height()) === $window.height() ) {
				FixedHeader.scrollDisabled();
			}
		},
		scrollDisabled: function() {
			$('#headerwrap').removeClass('fixed-header');
			$('#header').removeClass('header-on-scroll');
			$('#pagewrap').css('padding-top', '');
			Themify.body.removeClass('fixed-header-on');
		},
		scrollEnabled: function() {
			$('#headerwrap').addClass('fixed-header');
			$('#header').addClass('header-on-scroll');
			$('#pagewrap').css('padding-top', $('#headerwrap').outerHeight());
			Themify.body.addClass('fixed-header-on');
		}
	};

	// Initialize carousels //////////////////////////////
	function createCarousel(obj) {
		obj.each(function() {
			var $this = $(this);
			$this.carouFredSel({
				responsive : true,
				prev : '#' + $this.data('previd'),
				next : '#' + $this.data('nextid'),
				circular : true,
				infinite : true,
				swipe: true,
				scroll : {
					items : 1,
					fx : $this.data('effect'),
					duration : parseInt($this.data('speed'))
				},
				auto : {
					play : !!('off' !== $this.data('autoplay')),
					timeoutDuration : 'off' !== $this.data('autoplay') ? parseInt($this.data('autoplay')) : 0,
					button: '#breaking-news-play_pause'
				},
				items : {
					visible : {
						min : 1,
						max : 1
					},
					width : 222
				},
				onCreate : function() {
					$this.closest('.slideshow-wrap').css({
						'visibility' : 'visible',
						'height' : 'auto'
					});
					$('.breaking-news .carousel-nav-wrap').remove();
					$('.breaking-news-loader').remove();
					$(window).triggerHandler('resize');
				}
			});
		});
	}

	// DOCUMENT READY
	$(document).ready(function() {

		// Fixed header
		if(themifyScript.fixedHeader){
			FixedHeader.init();
		}

		/////////////////////////////////////////////
		// Scroll to top
		/////////////////////////////////////////////
		$('.back-top a').on('click',function() {
			$('body,html').animate({ scrollTop: 0 }, 800);
			return false;
		});

		/////////////////////////////////////////////
		// Add class if menu has children
		/////////////////////////////////////////////
		$("#main-nav li:has(ul)").addClass("has-sub-menu");
		$("#main-nav li:has(div)").addClass("has-mega-sub-menu");

		if( is_touch_device() && typeof $.fn.themifyDropdown !== 'function' ) {
			Themify.LoadAsync(themify_vars.url + '/js/themify.dropdown.js', function(){
				$( '#main-nav' ).themifyDropdown();
				$( '#top-nav' ).themifyDropdown();
			},null,null,function(){
                            return ('undefined' !== typeof $.fn.themifyDropdown);
                        });
		}

		/////////////////////////////////////////////
		// Add class for longer meta info
		/////////////////////////////////////////////
		$('.post-content .post-title + .post-meta span').parent(".post-meta").addClass("post-meta-details");

		/////////////////////////////////////////////
		// search icon add class if it's focused
		/////////////////////////////////////////////
	
                $("#headerwrap #searchform :input").on('focus',function() {
                        $(".icon-search").addClass("icon-focus");
                }).on('blur',function() {
                        $(".icon-search").removeClass("icon-focus");
                });

            if ( document.querySelector('.has-mega-sub-menu')!==null) {
                Themify.LoadAsync(themifyScript.themeURI + '/themify/megamenu/js/themify.mega-menu.js', null,
                                    null,
                                    null,
                                    function () {
                                            return ('undefined' !== typeof $.fn.ThemifyMegaMenu);
                });
            }

		/////////////////////////////////////////////
		// Toggle nav on mobile
		/////////////////////////////////////////////
		var $menuIcon = $('#menu-icon'),
			$menuIconTop = $('#menu-icon-top'),
			$topNav = $('#top-nav'),
			$mainNav = $('#main-nav');

		$('#menu-icon').themifySideMenu({
			close: '#menu-icon-close'
		});
		$('#menu-icon-top').themifySideMenu({
			panel: '#top-nav-mobile-menu',
			side: 'left',
			close: '#top-nav-menu-icon-close'
		});
                var $overlay = $( '<div class="body-overlay">' );
                Themify.body.append( $overlay ).on( 'sidemenushow.themify', function () {
                    $overlay.addClass( 'body-overlay-on' );
                } ).on( 'sidemenuhide.themify', function () {
                    $overlay.removeClass( 'body-overlay-on' );
                } ).on( 'click.themify touchend.themify', '.body-overlay', function () {
                    $( '#menu-icon' ).themifySideMenu( 'hide' );
					$( '#menu-icon-top' ).themifySideMenu( 'hide' );
                } );
                // Reset slide nav width
		$(window).on('resize',function(){
                    if ($(window).width() > 780) {
                        Themify.body.removeAttr('style');
                    }
                    if(  $('#mobile-menu').hasClass('sidemenu-on') && $( '#menu-icon' ).is(':visible')){
                          $overlay.addClass( 'body-overlay-on' );
                    }
                    else{
                         $overlay.removeClass( 'body-overlay-on' );
                    }
                    headerHeightSlide();
		});

		/////////////////////////////////////////////
		// NiceScroll plugin
		/////////////////////////////////////////////
		if ( typeof $.fn.niceScroll !== 'undefined' && ! is_touch_device() ) {

			$menuIcon.on('click', function(){
				if ( $mainNav.getNiceScroll().length === 0 ) {
					$mainNav.niceScroll({
						autohidemode: false
					});
				}
			});
			$('.mega').each(function(){
				var alink = $(this).find('a').first(),
                                    vw = $(window).width();
				$(window).on('resize',function(){
					vw = $(window).width();
				});
				alink.hover(function(){
                                    if(vw > 780 && $(".mega .mega-sub-menu ul").getNiceScroll().length === 0){
                                        $(".mega .mega-sub-menu ul").show().niceScroll({
                                                autohidemode: false
                                        });
                                    }
				});
			});
			// Menu Top
			$menuIconTop.on('click', function(){
				if ( $topNav.getNiceScroll().length === 0 ) {
					$topNav.niceScroll({
						autohidemode: false
					});
				}
			});
		}

		/////////////////////////////////////////////
		// Header height for slide effect
		/////////////////////////////////////////////
		function headerHeightSlide(){
			if ($('#headerwrap').height() > 120) {
				$("#headerwrap").addClass("long-menu");
			} else {
				$("#headerwrap").removeClass("long-menu");
			}
		}
                headerHeightSlide();
	});

	// WINDOW LOAD
	$(window).on('load',function() {

		/////////////////////////////////////////////
		// Carousel initialization
		/////////////////////////////////////////////
                var slideShow = $('.slideshow');
                if(slideShow.length>0){
                    if(!$.fn.carouFredSel){
                        Themify.LoadAsync(themify_vars.url+'/js/carousel.min.js',function(){
                            createCarousel(slideShow );
                        },null,
                        null,
                        function () {
                            return ('undefined' !== typeof $.fn.carouFredSel);
                        });
                    }
                    else{
                       createCarousel( slideShow);
                    }
                }

		/////////////////////////////////////////////
		// Pause breaking news
		/////////////////////////////////////////////
		$('#breaking-news-play_pause').on('click',function(){
			$(this).toggleClass('playing');
		});

		// EDGE MENU //
		$(function ($) {
			$("#main-nav li").on('mouseenter mouseleave dropdown_open', function (e) {
				if ($('ul', this).length) {
					var elm = $('ul:first', this),
                                            off = elm.offset(),
                                            l = off.left,
                                            w = elm.width(),
                                            docW = $(window).width(),
                                            isEntirelyVisible = (l + w <= docW);

					if (!isEntirelyVisible) {
						$(this).addClass('edge');
					} else {
						$(this).removeClass('edge');
					}

				}
			});
		});


	});

})(jQuery);
