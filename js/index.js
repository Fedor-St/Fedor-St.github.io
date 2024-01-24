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

////////////////////////////////
//Home: review courses slider//
//////////////////////////////
const reviewCourses = tns({
  container: '#review-courses__slider',

  controlsContainer: "#review-courses-slider__customize-controls",
  prevButton: "#review-courses-slider__prev-btn",
  nextButton: "#review-courses-slider__next-btn",

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
      gutter: 5,
      controls: false,
      center: true,
    },
    600: {
      items: 2,
      gutter: 12,
      center: false,
      edgePadding: 0,
      controls: true,
    },
    1023: {
      items: 3,
      gutter: 20,
    },
  }
});

//////////////////////////////////////
//Home: check online courses slider//
////////////////////////////////////
const checkOnlineCourses = tns({
  container: '#check-online-courses__slider',
  items: 1,
  nav: false,
  speed: 1000,
  preventActionWhenRunning: true,
  mode: "gallery",
  controlsContainer: "#check-online-courses__customize-controls",
  prevButton: "#check-online-courses__prev-btn",
  nextButton: "#check-online-courses__next-btn"
});


//////////////////////////////
//Home: our products slider//
////////////////////////////
const productsSlider = tns({
  container: '#our-products__slider',
  items: 1,
  nav: false,
  speed: 1000,
  preventActionWhenRunning: true,
  mode: "gallery",
  controlsContainer: "#our-products__customize-controls",
  prevButton: "#our-products__prev-btn",
  nextButton: "#our-products__next-btn"
});

//////////////////////////////
//Home: courses demo slider//
////////////////////////////
const coursesDemoSlider = tns({
  items: 3,
  nav: false,
  speed: 700,
  mouseDrag: true,
  swipeAngle: 45,
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

/////////////////////////
//Home: Reviews slider//
///////////////////////
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

////////////////////////////////////
//Home: students portfolio slider//
//////////////////////////////////
const studentsPortfolioSlider = tns({
  items: 3,
  nav: false,
  speed: 700,
  mouseDrag: true,
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

//////////////////////
//Home: FAQ section//
////////////////////
const faqSection = document.querySelector("section.faq");
faqSection && faqSection.addEventListener("click", event => {
    const faqItem = event.target.closest(".faq__list-item");
    if (!faqItem) return;
    const faqItemContent = faqItem.querySelector(".faq__item-descr");

    const faqItems = faqSection.querySelectorAll(".faq__list-item");

    if (!faqItem.classList.contains("faq__list-item_expanded")) {
        faqItems.forEach(item => {
            const faqItemContent = item.querySelector(".faq__item-descr");
            item.classList.remove("faq__list-item_expanded");
            $(faqItemContent).stop().slideUp(200, "linear");

        })

        faqItem.classList.add("faq__list-item_expanded");
        $(faqItemContent).stop().slideDown(200, "linear");
    } else {
        faqItem.classList.remove("faq__list-item_expanded");
        $(faqItemContent).stop().slideUp(200, "linear");
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

    // const footerSubmenuContent = this.nextElementSibling;
    // if (footerSubmenuContent.style.display === "block") {
    //   footerSubmenuContent.style.display = "none";
    // } else {
    //   footerSubmenuContent.style.display = "block";
    // }
    const footerSubmenu = this.nextElementSibling;
    if (footerSubmenu.style.maxHeight) {
      footerSubmenu.style.maxHeight = null;
      } else {
        footerSubmenu.style.maxHeight = footerSubmenu.scrollHeight + "px";
      }
  });
}

