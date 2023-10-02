 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
  $(window).scroll(function(e){
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then 
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 4,
        autoPlay:true,
        loop:true,
		responsive:{
			0:{
			  items:1
			},
			600:{
			  items:2
			},
			1000:{
			  items:4
			}
		  }
    });
});

var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'images/Gallery/8.JPG',
		'images/Gallery/1.JPG',
		'images/Gallery/2.JPG',
		'images/Gallery/3.JPG',
		'images/Gallery/4.JPG',
		'images/Gallery/5.JPG',
		'images/Gallery/6.JPG',
		'images/Gallery/7.JPG',
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();

/*!
 * Particleground
 *
 */
document.addEventListener('DOMContentLoaded', function () {
	particleground(document.getElementById('particles'), {
	  dotColor: '#ffffff',
	  lineColor: '#ffffff'
	});
	var intro = document.getElementById('intro');
	intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  }, false);
  
  
  
  ;(function(window, document) {
	"use strict";
	var pluginName = 'particleground';
  
	function extend(out) {
	  out = out || {};
	  for (var i = 1; i < arguments.length; i++) {
		var obj = arguments[i];
		if (!obj) continue;
		for (var key in obj) {
		  if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object')
			  deepExtend(out[key], obj[key]);
			else
			  out[key] = obj[key];
		  }
		}
	  }
	  return out;
	};
  
	var $ = window.jQuery;
  
	function Plugin(element, options) {
	  var canvasSupport = !!document.createElement('canvas').getContext;
	  var canvas;
	  var ctx;
	  var particles = [];
	  var raf;
	  var mouseX = 0;
	  var mouseY = 0;
	  var winW;
	  var winH;
	  var desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
	  var orientationSupport = !!window.DeviceOrientationEvent;
	  var tiltX = 0;
	  var pointerX;
	  var pointerY;
	  var tiltY = 0;
	  var paused = false;
  
	  options = extend({}, window[pluginName].defaults, options);
  
	  /**
	   * Init
	   */
	  function init() {
		if (!canvasSupport) { return; }
  
		//Create canvas
		canvas = document.createElement('canvas');
		canvas.className = 'pg-canvas';
		canvas.style.display = 'block';
		element.insertBefore(canvas, element.firstChild);
		ctx = canvas.getContext('2d');
		styleCanvas();
  
		// Create particles
		var numParticles = Math.round((canvas.width * canvas.height) / options.density);
		for (var i = 0; i < numParticles; i++) {
		  var p = new Particle();
		  p.setStackPos(i);
		  particles.push(p);
		};
  
		window.addEventListener('resize', function() {
		  resizeHandler();
		}, false);
  
		document.addEventListener('mousemove', function(e) {
		  mouseX = e.pageX;
		  mouseY = e.pageY;
		}, false);
  
		if (orientationSupport && !desktop) {
		  window.addEventListener('deviceorientation', function () {
			// Contrain tilt range to [-30,30]
			tiltY = Math.min(Math.max(-event.beta, -30), 30);
			tiltX = Math.min(Math.max(-event.gamma, -30), 30);
		  }, true);
		}
  
		draw();
		hook('onInit');
	  }
  
	  /**
	   * Style the canvas
	   */
	  function styleCanvas() {
		canvas.width = element.offsetWidth;
		canvas.height = element.offsetHeight;
		ctx.fillStyle = options.dotColor;
		ctx.strokeStyle = options.lineColor;
		ctx.lineWidth = options.lineWidth;
	  }
  
	  /**
	   * Draw particles
	   */
	  function draw() {
		if (!canvasSupport) { return; }
  
		winW = window.innerWidth;
		winH = window.innerHeight;
  
		// Wipe canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
  
		// Update particle positions
		for (var i = 0; i < particles.length; i++) {
		  particles[i].updatePosition();
		};
		// Draw particles
		for (var i = 0; i < particles.length; i++) {
		  particles[i].draw();
		};
  
		// Call this function next time screen is redrawn
		if (!paused) {
		  raf = requestAnimationFrame(draw);
		}
	  }
  
	  /**
	   * Add/remove particles.
	   */
	  function resizeHandler() {
		// Resize the canvas
		styleCanvas();
  
		var elWidth = element.offsetWidth;
		var elHeight = element.offsetHeight;
  
		// Remove particles that are outside the canvas
		for (var i = particles.length - 1; i >= 0; i--) {
		  if (particles[i].position.x > elWidth || particles[i].position.y > elHeight) {
			particles.splice(i, 1);
		  }
		};
  
		// Adjust particle density
		var numParticles = Math.round((canvas.width * canvas.height) / options.density);
		if (numParticles > particles.length) {
		  while (numParticles > particles.length) {
			var p = new Particle();
			particles.push(p);
		  }
		} else if (numParticles < particles.length) {
		  particles.splice(numParticles);
		}
  
		// Re-index particles
		for (i = particles.length - 1; i >= 0; i--) {
		  particles[i].setStackPos(i);
		};
	  }
  
	  /**
	   * Pause particle system
	   */
	  function pause() {
		paused = true;
	  }
  
	  /**
	   * Start particle system
	   */
	  function start() {
		paused = false;
		draw();
	  }
  
	  /**
	   * Particle
	   */
	  function Particle() {
		this.stackPos;
		this.active = true;
		this.layer = Math.ceil(Math.random() * 3);
		this.parallaxOffsetX = 0;
		this.parallaxOffsetY = 0;
		// Initial particle position
		this.position = {
		  x: Math.ceil(Math.random() * canvas.width),
		  y: Math.ceil(Math.random() * canvas.height)
		}
		// Random particle speed, within min and max values
		this.speed = {}
		switch (options.directionX) {
		  case 'left':
			this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2);
			break;
		  case 'right':
			this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2);
			break;
		  default:
			this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2);
			this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
			break;
		}
		switch (options.directionY) {
		  case 'up':
			this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2);
			break;
		  case 'down':
			this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2);
			break;
		  default:
			this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2);
			this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
			break;
		}
	  }
  
	  /**
	   * Draw particle
	   */
	  Particle.prototype.draw = function() {
		// Draw circle
		ctx.beginPath();
		ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, options.particleRadius / 2, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
  
		// Draw lines
		ctx.beginPath();
		// Iterate over all particles which are higher in the stack than this one
		for (var i = particles.length - 1; i > this.stackPos; i--) {
		  var p2 = particles[i];
  
		  // Pythagorus theorum to get distance between two points
		  var a = this.position.x - p2.position.x
		  var b = this.position.y - p2.position.y
		  var dist = Math.sqrt((a * a) + (b * b)).toFixed(2);
  
		  // If the two particles are in proximity, join them
		  if (dist < options.proximity) {
			ctx.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY);
			if (options.curvedLines) {
			  ctx.quadraticCurveTo(Math.max(p2.position.x, p2.position.x), Math.min(p2.position.y, p2.position.y), p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
			} else {
			  ctx.lineTo(p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
			}
		  }
		}
		ctx.stroke();
		ctx.closePath();
	  }
  
	  /**
	   * update particle position
	   */
	  Particle.prototype.updatePosition = function() {
		if (options.parallax) {
		  
			// Map tiltX range [-30,30] to range [0,winW]
			var ratioX = (winW - 0) / (30 - -30);
			pointerX = (tiltX - -30) * ratioX + 0;
			// Map tiltY range [-30,30] to range [0,winH]
			var ratioY = (winH - 0) / (30 - -30);
			pointerY = (tiltY - -30) * ratioY + 0;
		  // Calculate parallax offsets
		  this.parallaxTargX = (pointerX - (winW / 2)) / (options.parallaxMultiplier * this.layer);
		  this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10; // Easing equation
		  this.parallaxTargY = (pointerY - (winH / 2)) / (options.parallaxMultiplier * this.layer);
		  this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10; // Easing equation
		}
  
		var elWidth = element.offsetWidth;
		var elHeight = element.offsetHeight;
  
		switch (options.directionX) {
		  case 'left':
			if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
			  this.position.x = elWidth - this.parallaxOffsetX;
			}
			break;
		  case 'right':
			if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth) {
			  this.position.x = 0 - this.parallaxOffsetX;
			}
			break;
		  default:
			// If particle has reached edge of canvas, reverse its direction
			if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
			  this.speed.x = -this.speed.x;
			}
			break;
		}
  
		switch (options.directionY) {
		  case 'up':
			if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
			  this.position.y = elHeight - this.parallaxOffsetY;
			}
			break;
		  case 'down':
			if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight) {
			  this.position.y = 0 - this.parallaxOffsetY;
			}
			break;
		  default:
			// If particle has reached edge of canvas, reverse its direction
			if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
			  this.speed.y = -this.speed.y;
			}
			break;
		}
  
		// Move particle
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
	  }
  
	  /**
	   * Setter: particle stacking position
	   */
	  Particle.prototype.setStackPos = function(i) {
		this.stackPos = i;
	  }
  
	  function option (key, val) {
		if (val) {
		  options[key] = val;
		} else {
		  return options[key];
		}
	  }
  
	  function destroy() {
		console.log('destroy');
		canvas.parentNode.removeChild(canvas);
		hook('onDestroy');
		if ($) {
		  $(element).removeData('plugin_' + pluginName);
		}
	  }
  
	  function hook(hookName) {
		if (options[hookName] !== undefined) {
		  options[hookName].call(element);
		}
	  }
  
	  init();
  
	  return {
		option: option,
		destroy: destroy,
		start: start,
		pause: pause
	  };
	}
  
	window[pluginName] = function(elem, options) {
	  return new Plugin(elem, options);
	};
  
	window[pluginName].defaults = {
		minSpeedX: 0.1,
		maxSpeedX: 0.7,
		minSpeedY: 0.1,
		maxSpeedY: 0.7,
		directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
		directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
		density: 10000, // How many particles will be generated: one particle every n pixels
		dotColor: '#666666',
		lineColor: '#666666',
		particleRadius: 5, // Dot size
		lineWidth: 0.5,
		curvedLines: false,
		proximity: 100, // How close two dots need to be before they join
		parallax: true,
		opacity:0.5,
		parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
		onInit: function() {},
		onDestroy: function() {}
	};
  
	// nothing wrong with hooking into jQuery if it's there...
	if ($) {
	  $.fn[pluginName] = function(options) {
		if (typeof arguments[0] === 'string') {
		  var methodName = arguments[0];
		  var args = Array.prototype.slice.call(arguments, 1);
		  var returnVal;
		  this.each(function() {
			if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
			  returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
			}
		  });
		  if (returnVal !== undefined){
			return returnVal;
		  } else {
			return this;
		  }
		} else if (typeof options === "object" || !options) {
		  return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
			  $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		  });
		}
	  };
	}
  
  })(window, document);
  
  (function() {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];
	  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
								   || window[vendors[x]+'CancelRequestAnimationFrame'];
	  }
  
	  if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
		  var currTime = new Date().getTime();
		  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		  var id = window.setTimeout(function() { callback(currTime + timeToCall); },
			timeToCall);
		  lastTime = currTime + timeToCall;
		  return id;
		};
  
	  if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
		  clearTimeout(id);
		};
  }());
  