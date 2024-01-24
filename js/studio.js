// utils
function validateEmail(email) {
    let regExp =
        /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    return regExp.test(String(email).toLowerCase());
}

function getElementDataset(element, datasetAttr) {
    if (element) return element.dataset[datasetAttr];
}

function setElementDataset(element, datasetAttr, value) {
    if (element) element.dataset[datasetAttr] = value;
}

function toggleFormMessage(block, status, message = "", type = "") {
    if (!block) return;

    const text = block.querySelector('span');

    if (status) {
        text.textContent = message;
        text.className = type;
        block.classList.add('active');
    } else {
        block.classList.remove('active');
        text.textContent = "";
        text.className = "";
    }
}

function validateForm(form) {
    const errorObj = {
        status: "success",
        msg: "",
    }

    const phones = form.querySelectorAll(`input[type="tel"]`);
    phones.forEach(phone => {
        if (!(phone.value.length && phone.value.length === 17)) {
            phone.classList.add("input-error");
            errorObj.status = "error";
        }
    });

    const emails = form.querySelectorAll(`input[type="email"]`);
    emails.forEach(email => {
        if (!(email.value.length && validateEmail(email.value))) {
            email.classList.add("input-error");
            errorObj.status = "error";
        }
    });

    const textFields = form.querySelectorAll(`textarea, input[type="text"]`);
    textFields.forEach(textField => {
        if (!(textField.value.length && textField.value)) {
            textField.classList.add("input-error");
            errorObj.status = "error";
        }
    });

    return errorObj.status === "error" ? false : true;
}

function sendForm(form) {
    const submit = form.querySelector('button[type="submit"]');
    const message = form.querySelector('.contact-us__form-message');

    submit.setAttribute('disabled', true);

    const data = {
        action: 'sendMail'
    };

    const formfields = form.querySelectorAll('input, textarea');

    formfields.forEach(formfield => {
        const name = formfield.name;
        const value = formfield.value;
        data[name] = value;
    })

    console.log(data);

    toggleFormMessage(message, false);

    jQuery.post(myAjax.ajaxurl, data, function (d) {
        console.log(d);
        if (d && d.status === "ok") {
            clearForm(form);
            toggleFormMessage(message, true, "Your message sent! We will contact you as soon as possible.", "success");
        } else {
            toggleFormMessage(message, true, "Something went wrong. Please try again", "error");
        }
        submit.removeAttribute('disabled');
    });
}

function clearForm(form) {
    const formfields = form.querySelectorAll('input, textarea');

    formfields.forEach(formfield => {
        formfield.value = "";
        formfield.classList.remove("input-error");
    })
}

function initMasks() {
    $(`input[name="phone_number"]`).mask("+0 (000) 000-0000");
}

function fixHeader() {
    const headerType = window.matchMedia("(min-width: 1024px)").matches ? "desktop" : "mobile";

    const header = document.querySelector(`.header-${headerType}`);
    window.scrollY > 0 ? header.classList.add("page-scrolled") : header.classList.remove("page-scrolled");
}

function setPaddingByHeaderHeight(header, element) {
    if (!header || !element) return;
    const height = header.offsetHeight - 1;
    console.log(height);
    element.style.paddingTop = `${height}px`;
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

function courseCardSliderInit(selector) {
    return tns({
        container: `${selector} .slider`,
        items: 3,
        nav: false,
        gutter: "32",
        speed: 700,
        mouseDrag: true,
        prevButton: `${selector} .slider-control-prev`,
        nextButton: `${selector} .slider-control-next`,
        responsive: {
            0: {
                items: 1,
                gutter: "20",
            },
            768: {
                items: 2,
            },
            1280: {
                items: 3,
            }
        }
    });
}

function reviewsCardSliderInit() {
    return tns({
        items: 3,
        nav: false,
        gutter: "65",
        speed: 700,
        mouseDrag: true,
        autoHeight: true,
        container: ".reviews-slider .slider",
        prevButton: ".reviews-slider .slider-control-prev",
        nextButton: ".reviews-slider .slider-control-next",
        responsive: {
            0: {
                items: 1,
                gutter: "20",
            },
            768: {
                items: 2,
                gutter: "45",
            },
            1280: {
                items: 3,
                gutter: "65",
            }
        }
    })
}

function checkQuantityOfItems(listSelector, listItemSelector, cV = 1) {
    const list = document.querySelector(`${listSelector}`);
    if (!list) return;
    const items = list.querySelectorAll(`${listItemSelector}`);

    if (items.length === cV) setHorAlignment(list);
}

function setHorAlignment(block) {
    if (block) {
        block.style.justifyContent = "center";
    }
}

document.addEventListener("DOMContentLoaded", event => {
    fixHeader();
    initMasks();

    const header = document.querySelector(".header-container");
    const main = document.querySelector("main");
    setPaddingByHeaderHeight(header, main);

    window.addEventListener("scroll", event => {
        fixHeader();
        setPaddingByHeaderHeight(header, main);
    });

    window.addEventListener("resize", event => {
        fixHeader();
        setPaddingByHeaderHeight(header, main);
    })

    checkQuantityOfItems("body.course .course-price .actions", ".btn");

    const index = document.querySelector('.index');

    if (index) {
        if (index.querySelector('.courses-slider')) {
            const coursesSlider = courseCardSliderInit('.courses-slider');
        }

        if (index.querySelector('.courses-promo-slider')) {
            const coursesPromoSlider = tns({
                container: '.courses-promo-slider .slider',
                items: 1,
                nav: false,
                speed: 1000,
                preventActionWhenRunning: true,
                mode: "gallery",
                prevButton: ".courses-promo-slider .slider-control-prev",
                nextButton: ".courses-promo-slider .slider-control-next"
            });
        }

        if (index.querySelector('.products-slider')) {
            const productsSlider = tns({
                container: '.products-slider .slider',
                items: 1,
                nav: false,
                speed: 1000,
                preventActionWhenRunning: true,
                mode: "gallery",
                prevButton: ".products-slider .slider-control-prev",
                nextButton: ".products-slider .slider-control-next"
            });
        }

        if (index.querySelector('.courses-preview-slider')) {
            const coursesPreviewSlider = tns({
                items: 3,
                nav: false,
                speed: 700,
                mouseDrag: true,
                container: '.courses-preview-slider .slider',
                prevButton: ".courses-preview-slider .slider-control-prev",
                nextButton: ".courses-preview-slider .slider-control-next",
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
        }

        if (index.querySelector('.reviews-slider')) {
            const reviewsSlider = reviewsCardSliderInit();
        }

        if (index.querySelector('.students-preview-slider')) {
            const studentsPreviewSlider = tns({
                items: 3,
                nav: false,
                speed: 700,
                mouseDrag: true,
                container: '.students-preview-slider .slider',
                prevButton: ".students-preview-slider .slider-control-prev",
                nextButton: ".students-preview-slider .slider-control-next",
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
        }
		
		if (index.querySelector('.students-preview-slider--about')) {
            const studentsPreviewSlider = tns({
                items: 4,
                nav: false,
                speed: 700,
                mouseDrag: true,
                container: '.students-preview-slider--about .slider',
                prevButton: ".students-preview-slider--about .slider-control-prev",
                nextButton: ".students-preview-slider--about .slider-control-next",
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
                        items: 4,
                    },
                    1440: {
                        gutter: "32",
                    }
                }
            });
        }
    }

    const course = document.querySelector('.course');

    if (course) {
        if (course.querySelector('.online-courses-slider')) {
            const onlineCoursesSlider = courseCardSliderInit('.online-courses-slider');
        }

        if (course.querySelector('.course-results-slider')) {
            const courseResultsSlider = tns({
                items: 4,
                nav: false,
                speed: 700,
                mouseDrag: true,
                container: '.course-results-slider .slider',
                prevButton: ".course-results-slider .slider-control-prev",
                nextButton: ".course-results-slider .slider-control-next",
                responsive: {
                    0: {
                        items: 1,
                        gutter: "20",
                    },
                    576: {
                        items: 2,
                        gutter: "22",
                    },
                    768: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1280: {
                        items: 4,
                    },
                    1440: {
                        gutter: "32",
                    }
                }
            });
        }

        if (course.querySelector('.live-courses-slider')) {
            const liveCoursesSlider = tns({
                items: 2,
                nav: false,
                speed: 700,
                mouseDrag: true,
                container: '.live-courses-slider .slider',
                prevButton: ".live-courses-slider .slider-control-prev",
                nextButton: ".live-courses-slider .slider-control-next",
                responsive: {
                    0: {
                        items: 1,
                        gutter: "20",
                    },
                    768: {
                        items: 2,
                        gutter: "22",
                    },
                    1024: {
                        gutter: "32",
                    },
                    1280: {
                        gutter: "32",
                    },
                }
            });
        }

        if (course.querySelector('.reviews-slider')) {
            const reviewsSlider = reviewsCardSliderInit();
        }

        if (course.querySelector('.trainings-slider')) {
            const trainingsSlider = courseCardSliderInit('.trainings-slider');
        }
    }

    const faqSection = document.querySelector("section.faq");
    faqSection && faqSection.addEventListener("click", event => {
        const faqItem = event.target.closest(".faq__item");
        if (!faqItem) return;
        const faqItemContent = faqItem.querySelector(".faq__item-description");

        const faqItems = faqSection.querySelectorAll(".faq__item");

        if (!faqItem.classList.contains("faq__item_expanded")) {
            faqItems.forEach(item => {
                const faqItemContent = item.querySelector(".faq__item-description");
                item.classList.remove("faq__item_expanded");
                $(faqItemContent).stop().slideUp(200, "linear");

            })

            faqItem.classList.add("faq__item_expanded");
            $(faqItemContent).stop().slideDown(200, "linear");
        } else {
            faqItem.classList.remove("faq__item_expanded");
            $(faqItemContent).stop().slideUp(200, "linear");
        }
    });


    const formFieldInputs = document.querySelectorAll(".form-field input, .form-field textarea");
    formFieldInputs.forEach(input => {
        input.addEventListener("blur", event => {
            const input = event.target;
            if (!input.classList.contains("form-field__input")) return;

            method = input.value.length ? "add" : "remove";
            input.classList[method]("form-field__input_non-empty");
        })
    });

    formFieldInputs.forEach(input => {
        input.addEventListener("focus", event => {
            input.classList.remove("input-error");
        })
    })

    const forms = document.querySelectorAll("form.contact-us__form");
    forms.forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const validate = validateForm(form);
            if (validate) {
                sendForm(form);
            }
        })
    })

    const toggleMobileMenuButton = document.querySelector(".header-mobile .toggle-mobile-menu");
    toggleMobileMenuButton.addEventListener("click", toggleMobileMenu);

    const courseCards = document.querySelectorAll(".course-card");
    courseCards.forEach(card => {
        card.addEventListener("click", event => {
            if (window.matchMedia("(hover:none)").matches) card.classList.add("course-card_content-visible")
        });
    });

    const programSection = document.querySelector("section.program");
    programSection && programSection.addEventListener("click", event => {
        event.preventDefault();
        const programBlock = event.target.closest(".program-block");
        if (!programBlock) return;
        const programBlockDescription = programBlock.querySelector(".program-block-description");

        const programBlocks = programSection.querySelectorAll(".program-block");

        if (!programBlock.classList.contains("program-block-expanded")) {
            programBlocks.forEach(item => {
                const programBlockDescription = item.querySelector(".program-block-description");
                item.classList.remove("program-block-expanded");
                $(programBlockDescription).stop().slideUp(200, "linear");

            })
            programBlock.classList.add("program-block-expanded");
            $(programBlockDescription).stop().slideDown(200, "linear");
        } else {
            programBlock.classList.remove("program-block-expanded");
            $(programBlockDescription).stop().slideUp(200, "linear");
        }
    });

    $(".scroll-action").click(function (event) {
        event.preventDefault();

        var target = $(this).attr('data-target');
        if (!target) return;

        var section = $(target);
        if (!section.length) return;

        var padding = window.matchMedia("(max-width: 1023px)").matches ? 59 : 52;
        $("html,body")
            .stop()
            .animate({ scrollTop: $(section).offset().top - padding }, 500);
    });
})


class Modal {
    constructor(modal) {
        this.modal = modal;
        this.modalDialog = this.modal.querySelector(".modal-dialog");

        this._bindEvents();
    }

    _bindEvents = () => {
        this.modal.addEventListener("click", event => {
            if (event.target.contains(this.modalDialog)) this.hide();
        });

        this.modal.addEventListener("click", event => {
            const btnClose = event.target;
            if (getElementDataset(btnClose, "modalDismiss")) this.hide();
        });
    }

    show() {
        this.modal.dispatchEvent(new CustomEvent("modal-show"));

        this.modal.classList.add("show");

        const html = document.querySelector("html");
        html.classList.add("modal-open");

        setTimeout(() => this.modal.dispatchEvent(new CustomEvent("modal-shown")), 200);
    }

    hide() {
        this.modal.dispatchEvent(new CustomEvent("modal-hide"));

        this.modal.classList.remove("show");

        const html = document.querySelector("html");
        html.classList.remove("modal-open");

        setTimeout(() => this.modal.dispatchEvent(new CustomEvent("modal-hidden")), 200);
    }
}

function getParsedLink(link) {
    return link.split(/[?&]/g);
}

function setCourseInfo(root, modal) {
    const course = root.closest(".masterclass");
    if (!(course && modal)) return;

    const place = course.querySelector(".masterclass-place").textContent;
    const date = course.querySelector(".masterclass-data").textContent;

    const courseInfo = modal.querySelector(".course-info");
    courseInfo.innerHTML = `
        <span>${place}</span>
        <span>${date}</span>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const preCheckoutModal = document.querySelector(".precheckout-modal");
    const preCheckoutModalObj = preCheckoutModal ? new Modal(preCheckoutModal) : null;

    if (preCheckoutModal) {
        const proceedBtn = preCheckoutModal.querySelector(".proceed-btn");

        const openPrecheckoutModal = document.querySelectorAll(".open-precheckout-modal");
        openPrecheckoutModal.forEach(button => {
            button.addEventListener("click", event => {
                preCheckoutModalObj && preCheckoutModalObj.show();

                const dataId = getElementDataset(button, "id");

                const checkedOption = preCheckoutModal.querySelector(".payment-types .custom-radio input:checked");
                const dataValue = getElementDataset(checkedOption, "value");

                if (!(dataValue && dataId)) return;

                setCourseInfo(button, preCheckoutModal);

                const newLink = `?add-to-cart=${dataId}&quantity=1&wc_deposit_option=${dataValue}`;
                proceedBtn.href = newLink;
            });
        });

        const paymentTypes = preCheckoutModal.querySelectorAll(".payment-types .custom-radio");
        paymentTypes.forEach(type => {
            type.addEventListener("change", event => {
                const dataValue = getElementDataset(event.target, "value");
                if (dataValue !== "yes" && dataValue !== "no") return;

                const parsed = getParsedLink(proceedBtn.href);
                const newLink = `?${parsed[1]}&${parsed[2]}&wc_deposit_option=${dataValue}`;
                proceedBtn.href = newLink;
            });
        })
    }

    const wooCheckoutForm = document.querySelector("form.woocommerce-checkout");
    wooCheckoutForm && wooCheckoutForm.addEventListener("submit", event => {
        let checked = true;

        const agreementCheckboxes = wooCheckoutForm.querySelectorAll("input.checkbox-agreement");
        agreementCheckboxes && agreementCheckboxes.forEach(ch => {
            if (ch.checked) {
                ch.classList.add("input-error");
                checked = false;
            }
        });

        if (!checked) event.preventDefault();
    });
})


 jQuery(".footer_menu ul li.menu-item-has-children a:first-child").on('click', function() {
    jQuery(this).parent().toggleClass('active_dropdown');
});