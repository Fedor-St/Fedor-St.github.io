///////////
//Header//
/////////

function fixHeader() {
    const headerType = window.matchMedia("(min-width: 1024px)").matches ? "desktop" : "mobile";

    const header = document.querySelector(`.header-${headerType}`);
    window.scrollY > 0 ? header.classList.add("page-scrolled") : header.classList.remove("page-scrolled");
}

function toggleMobileMenu() {
    const mobileHeader = document.querySelector(`.header-mobile`);
    const html = document.querySelector("html");

    if (mobileHeader.classList.contains("mobile-nav-opened")) {
        html.classList.remove("lock");
        mobileHeader.classList.remove("mobile-nav-opened");
        return;
    }

    mobileHeader.classList.add("mobile-nav-opened");
    html.classList.add("lock");
}

document.addEventListener("DOMContentLoaded", event => {
    fixHeader();

    const header = document.querySelector(".header-container");

    window.addEventListener("scroll", event => {
        fixHeader();
    });

    window.addEventListener("resize", event => {
        fixHeader();
    });


})

const toggleMobileMenuButton = document.querySelector(".header-mobile .toggle-mobile-menu");
toggleMobileMenuButton.addEventListener("click", toggleMobileMenu);


//////////////////////////
//Header Submenu button//
////////////////////////
const headerSubmenuBtn = document.getElementsByClassName("menu-items__submenu-btn");
var i;

for (i = 0; i < headerSubmenuBtn.length; i++) {
  headerSubmenuBtn[i].addEventListener("click", function() {
    this.classList.toggle("header__submenu-active");

    const headerSubmenu = this.nextElementSibling;
    if (headerSubmenu.style.maxHeight) {
      headerSubmenu.style.maxHeight = null;
      } else {
        headerSubmenu.style.maxHeight = headerSubmenu.scrollHeight + "px";
      }
  });
}

///////////////////////
//Anna's work slider//
/////////////////////

const annasWorkSlider = tns({
  container: '#annas-work__slider',

  controlsContainer: "#annas-work-slider__customize-controls",
  prevButton: "#annas-work-slider__prev-btn",
  nextButton: "#annas-work-slider__next-btn",

  nav: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  swipeAngle: 45,

  autoplay: false,
  autoplayTimeout: 5000,
  autoplayButtonOutput: false,
  
  responsive: {
    0: {
        items: 1,
        gutter: 0,
    },
    768: {
        items: 2,
        gutter: 32,
    },
    1280: {
        items: 4,
    },
  }
});

///////////////////
//Reviews slider//
/////////////////

const reviewsSlider = tns({
  container: '#reviews__slider',

  controlsContainer: "#reviews-slider__customize-controls",
  prevButton: "#reviews-slider__prev-btn",
  nextButton: "#reviews-slider__next-btn",

  nav: false,
  arrowKeys: true,
  mouseDrag: true,
  swipeAngle: 45,

  autoplay: false,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  
  responsive: {
    300: {
      items: 1,
      edgePadding: 20,
      gutter: 20,
      // controls: false,
      center: true,
    },
    600: {
      items: 2,
      gutter: 12,
      center: false,
      edgePadding: 0,
    },
    1023: {
      items: 3,
      gutter: 32,
      controls: true,
    },
  }
});


//////////////////////////
//Footer Submenu Button//
////////////////////////
const footerMenuBtn = document.getElementsByClassName("footer__dropdown-btn");
var i;

for (i = 0; i < footerMenuBtn.length; i++) {
  footerMenuBtn[i].addEventListener("click", function() {
    this.classList.toggle("footer__submenu-active");
    
    const footerSubmenu = this.nextElementSibling;
    if (footerSubmenu.style.maxHeight) {
      footerSubmenu.style.maxHeight = null;
      } else {
        footerSubmenu.style.maxHeight = footerSubmenu.scrollHeight + "px";
      }
  });
}

