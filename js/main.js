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




function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}