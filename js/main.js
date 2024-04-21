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




FlexMasonry.init('.gallery', {
  /*
   * If `responsive` is `true`, `breakpointCols` will be used to determine
   * how many columns a grid should have at a given responsive breakpoint.
   */
  responsive: true,
  /*
   * A list of how many columns should be shown at different responsive
   * breakpoints, defined by media queries.
   */
  breakpointCols: {
      'min-width: 1500px': 6,
      'min-width: 1200px': 5,
      'min-width: 992px': 4,
      'min-width: 768px': 3,
      'min-width: 576px': 2,
  },
  /*
   * If `responsive` is `false`, this number of columns will always be shown,
   * no matter the width of the screen.
   */
  numCols: 4,
});