// мобільне меню
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__inner-right');
const menuClose = document.querySelector('.menu__close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu--open');
});

//закриття бургера після кліку на посилання
$('.menu__btn').on('click', function () {
	$('.menu__list').addClass('menu--open');
  });
  
  $( '.menu__link' ).on("click", function(){
	$('.menu__list').removeClass('menu--open');
  });



//кнопка Наверх

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const icons = document.querySelectorAll('.menu__btn');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});




$(document).ready(function() {
	$('.popup__link').magnificPopup({
		disableOn: 900,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.grid').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/arrow-left.svg" alt="arrow"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/arrow-right.svg" alt="arrow"></button>',
	});
	$(document).ready(function() {
		$('.grid-wrapper').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function(item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
				}
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
			
		});
	});
});

$(document).ready(function() {
	$('.popup__link').magnificPopup({
		disableOn: 900,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.gallery').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/arrow-left.svg" alt="arrow"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/arrow-right.svg" alt="arrow"></button>',
	});
	$('.grid').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});