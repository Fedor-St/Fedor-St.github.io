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

for (let i = 0; i < headerSubmenuBtn.length; i++) {
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

//////////////////
//Home: Sliders//
////////////////
const commonOptions = {
  nav: false,

  arrowKeys: true,

  mouseDrag: true,
  swipeAngle: 45,

  autoplay: true,
  autoplayTimeout: 5000,
  autoplayButtonOutput: false,
};

function initializeSlider(selector, specificOptions) {
  const sliderElement = document.querySelector(selector);
  if (sliderElement) {
    const options = { ...commonOptions, ...specificOptions };
    tns(options);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Home: review courses slider
  initializeSlider('#review-courses__slider', {

    container: '#review-courses__slider',
    controlsContainer: "#review-courses-slider__customize-controls",
    prevButton: "#review-courses-slider__prev-btn",
    nextButton: "#review-courses-slider__next-btn",

    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 2,
        gutter: 12,
      },
      1023: {
        items: 3,
        gutter: 20,
      },
    }
  });

  // Home: check online courses slider
  initializeSlider('#check-online-courses__slider', {

    container: '#check-online-courses__slider',
    controlsContainer: "#check-online-courses__customize-controls",
    prevButton: "#check-online-courses__prev-btn",
    nextButton: "#check-online-courses__next-btn",

    items: 1,
    preventActionWhenRunning: true,
    mode: "gallery",
  });

  //Home: our products slider
  initializeSlider('#our-products__slider', {

    container: '#our-products__slider',
    controlsContainer: "#our-products__customize-controls",
    prevButton: "#our-products__prev-btn",
    nextButton: "#our-products__next-btn",

    items: 1,
    preventActionWhenRunning: true,
    mode: "gallery",
  });

  //Home: courses demo slider
  initializeSlider('#courses-demo__slider', {

    container: '#courses-demo__slider',
    controlsContainer: "#courses-demo__customize-controls",
    prevButton: "#courses-demo__prev-btn",
    nextButton: "#courses-demo__next-btn",

    responsive: {
        0: {
            items: 1,
            gutter: "20",
        },
        768: {
            items: 2,
            gutter: "42",
        },
        1280: {
            items: 3,
        },
        1440: {
            gutter: "82",
        }
    }
  });

  //Reviews slider
  initializeSlider('#reviews__slider', {

    container: '#reviews__slider',
    controlsContainer: "#reviews-slider__customize-controls",
    prevButton: "#reviews-slider__prev-btn",
    nextButton: "#reviews-slider__next-btn",

    responsive: {
      300: {
        items: 1,
        edgePadding: 10,
        gutter: 10,
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

  //Home: students portfolio slider
  initializeSlider('#students-portfolio__slider', {

    container: '#students-portfolio__slider',
    controlsContainer: "#students-portfolio__customize-controls",
    prevButton: "#students-portfolio__prev-btn",
    nextButton: "#students-portfolio__next-btn",

    responsive: {
        0: {
            items: 1,
            gutter: "20",
        },
        768: {
            items: 2,
            gutter: "32",
        },
        1280: {
            items: 3,
        },
        1440: {
            gutter: "32",
        }
    }
  });

  //About: Anna's work
  initializeSlider('#annas-work__slider', {

    container: '#annas-work__slider',
    controlsContainer: "#annas-work-slider__customize-controls",
    prevButton: "#annas-work-slider__prev-btn",
    nextButton: "#annas-work-slider__next-btn",

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
});

//////////////////////
//Home: FAQ section//
////////////////////
const faqBtn = document.getElementsByClassName("faq__btn");

for (let i = 0; i < faqBtn.length; i++) {
  faqBtn[i].addEventListener("click", function() {
    this.classList.toggle("faq__btn-active");

    const faqDescr = this.nextElementSibling;
    if (faqDescr.style.maxHeight) {
      faqDescr.style.maxHeight = null;
      } else {
        faqDescr.style.maxHeight = faqDescr.scrollHeight + "px";
      }
  });
}

////////////////////
//Contact us Form//
//////////////////



//////////////////////////
//Footer Submenu Button//
////////////////////////
const footerMenuBtn = document.getElementsByClassName("footer__dropdown-btn");

for (let i = 0; i < footerMenuBtn.length; i++) {
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