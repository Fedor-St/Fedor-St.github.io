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

/////////////////////////////////
//Header Sub menu Tab-opening //
///////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.menu-items__dropdown-btn > .menu-items__link[aria-haspopup="true"]');

  dropdownButtons.forEach((button) => {
    // When the dropdown button/link is focused, show the submenu
    button.addEventListener('focus', () => {
      const dropdownContent = button.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.style.display = 'block';
      }
    });

    // When tabbing out of the last item in the dropdown, hide the dropdown
    const dropdownItems = button.nextElementSibling.querySelectorAll('a');
    if (dropdownItems.length > 0) {
      const lastItem = dropdownItems[dropdownItems.length - 1];
      lastItem.addEventListener('blur', () => {
        const dropdownContent = button.nextElementSibling;
        if (dropdownContent) {
          // Use a timeout to delay the check, allowing the next focused element to be verified
          setTimeout(() => {
            if (!document.activeElement.closest('.menu-items__dropdown-content')) {
              dropdownContent.style.display = 'none';
            }
          }, 1);
        }
      });
    }
  });

  // Additionally, to handle mouse hover for non-keyboard users
  const dropdownParents = document.querySelectorAll('.menu-items__dropdown-btn');
  dropdownParents.forEach(parent => {
    parent.addEventListener('mouseenter', () => {
      parent.querySelector('.menu-items__dropdown-content').style.display = 'block';
    });
    parent.addEventListener('mouseleave', () => {
      parent.querySelector('.menu-items__dropdown-content').style.display = 'none';
    });
  });
});




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

//Our services: permanent make up: check our services slider
initializeSlider('#check-services__slider', {

  container: '#check-services__slider',
  controlsContainer: "#check-services-slider__customize-controls",
  prevButton: "#check-services-slider__prev-btn",
  nextButton: "#check-services-slider__next-btn",

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

////////////////////////
//Our courses: Russian volume perfect line: get ready to produce results
initializeSlider('#check-services__slider', {

  container: '#check-services__slider',
  controlsContainer: "#check-services-slider__customize-controls",
  prevButton: "#check-services-slider__prev-btn",
  nextButton: "#check-services-slider__next-btn",

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
///////////////////////////////////////
//Our courses: Russian volume perfect line: get ready to produce results
initializeSlider('#training__slider', {

  container: '#training__slider',
  // controlsContainer: "#check-services-slider__customize-controls",
  // prevButton: "#check-services-slider__prev-btn",
  // nextButton: "#check-services-slider__next-btn",
  arrowKeys: false,
  mouseDrag: false,
  autoplay: false,

  responsive: {
    300: {
      items: 1,
      edgePadding: 10,
      gutter: 10,
      center: false,
      mouseDrag: true,
      controls: false,
    },
    600: {
      items: 2,
      gutter: 12,
      edgePadding: 0,
    },
    1023: {
      items: 2,
      gutter: 32,
    },
  }
});
});

//////////////////////
//Accordion section//
////////////////////
function initializeAccordion(clickSelector, toggleContentSelector, toggleClass) {
  const items = document.querySelectorAll(clickSelector);

  items.forEach(item => {
      // Initialize aria-expanded for accessibility
      const content = item.querySelector(toggleContentSelector);
      if (content) {
          content.style.height = '0px'; // Ensure all are collapsed initially
          item.setAttribute('aria-expanded', 'false'); // Set as collapsed
      }

      item.addEventListener('click', function(event) {
          event.preventDefault();
          const content = item.querySelector(toggleContentSelector);
          if (!content) return;

          const isExpanded = item.getAttribute('aria-expanded') === 'true';
          // Toggle the current item's expanded state
          item.setAttribute('aria-expanded', String(!isExpanded));

          // Close all items except the current one
          items.forEach(otherItem => {
              if (otherItem !== item) {
                  const contentToHide = otherItem.querySelector(toggleContentSelector);
                  if (contentToHide) {
                      contentToHide.style.height = '0px';
                      otherItem.setAttribute('aria-expanded', 'false'); // Mark as collapsed
                  }
                  // Optionally remove the class from other items if specified
                  if (toggleClass) {
                      otherItem.classList.remove(toggleClass);
                  }
              }
          });

          // Set the height dynamically for a smooth transition
          content.style.height = isExpanded ? '0px' : `${content.scrollHeight}px`;

          if (toggleClass) {
              item.classList.toggle(toggleClass, !isExpanded);
          }
      });
  });
}

initializeAccordion('.faq__list-item', '.faq__item-descr', 'faq_active');
initializeAccordion('.program__block', '.program__block-descr', 'program__block-expanded');

////////////////////
//Contact us Form//
//////////////////


//////////////////////////
//Footer Submenu Button//
////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const footerMenuBtn = document.getElementsByClassName("footer__dropdown-btn");

  const toggleSubmenu = function() {
      const footerSubmenu = this.nextElementSibling;
      if (footerSubmenu.style.maxHeight) {
          footerSubmenu.style.maxHeight = null;
          this.setAttribute('aria-expanded', 'false');
      } else {
          footerSubmenu.style.maxHeight = footerSubmenu.scrollHeight + "px";
          this.setAttribute('aria-expanded', 'true');
      }
      this.classList.toggle("footer__submenu-active");
  };

  Array.from(footerMenuBtn).forEach(button => {
      button.addEventListener("click", toggleSubmenu);

      button.addEventListener("keydown", function(event) {
          if (event.key === "Enter" || event.keyCode === 13) {
              toggleSubmenu.call(this);
          }
      });
  });
});