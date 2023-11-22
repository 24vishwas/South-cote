var navLinks = document.getElementById("nav-ele");
var open_menu = document.getElementById("open-menu");
var close_menu = document.getElementById("close-menu");

// 
function openMenu(){
    // navLinks.style.right = "0px";
    navLinks.style.transform = "translateX(0%)";
    open_menu.style.display ="none" 
    close_menu.style.display = 'inline-block'




}
function hideMenu(){
    // navLinks.style.right = "-220px";
    navLinks.style.transform = "translateX(100%)";
    close_menu.style.display = "none"
    open_menu.style.display = "inline-block"
}

const carousel = document.getElementById('carousel');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  showSlide();
}

function showSlide() {
  const itemWidth = carousel.clientWidth;
  const transformValue = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${transformValue}px)`;
}

setInterval(showNextSlide, 3000); // Auto-advance every 3 seconds

// Initial call to show the first slide
showSlide();


let crntIndex = 0;
    const totalSlides = document.querySelectorAll('.carousel-item-1').length;
    const carouselInner = document.getElementById('carousel-inner-1');

    function showSlides(index) {
        crntIndex = index;
        const translateValue = -crntIndex * 100 + '%';
        carouselInner.style.transform = `translateX(${translateValue})`;
    }

    function nextSlide() {
        if (crntIndex < totalSlides - 1) {
            showSlides(crntIndex + 1);
        } else {
            showSlides(0);
        }
    }

    function prevSlide() {
        if (crntIndex > 0) {
            showSlides(crntIndex - 1);
        } else {
            showSlides(totalSlides - 1);
        }
    }