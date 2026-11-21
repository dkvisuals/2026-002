
/* =====================================================
   DUA BEAUTY STUDIO
   Modern Beauty Editorial
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       01. ELEMENTS
    ================================================= */

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    const navLinks = document.querySelectorAll(".nav-link");

    const yearElement = document.querySelector("[data-year]");

    const modal = document.querySelector("#treatmentModal");
    const modalOverlay = document.querySelector(".treatment-modal-overlay");
    const modalClose = document.querySelector(".treatment-modal-close");

    const modalCategory = document.querySelector("#modalCategory");
    const modalTitle = document.querySelector("#modalTitle");
    const modalDescription = document.querySelector("#modalDescription");
    const modalTreatmentList = document.querySelector("#modalTreatmentList");

    let lastFocusedElement = null;


    /* =================================================
       02. TREATMENT DATA
    ================================================= */

    const treatments = {

        lashes: {
            category: "LASHES",
            title: "Lash Extensions",
            description: "Discover the different lash extension treatments available at DUA Beauty Studio.",

            items: [
                {
                    name: "One By One - New Set",
                    price: "€65",
                    duration: "120 min"
                },
                {
                    name: "One By One - Refill 2 Weeks",
                    price: "€35",
                    duration: "75 min"
                },
                {
                    name: "One By One - Refill 3 Weeks",
                    price: "€40"
                },
                {
                    name: "One By One - Refill 4 Weeks",
                    price: "€45"
                },
                {
                    name: "Volume 2D/6D - New Set",
                    price: "€70",
                    duration: "75 min"
                },
                {
                    name: "Volume - Refill 2 Weeks",
                    price: "€40",
                    duration: "135 min"
                },
                {
                    name: "Volume - Refill 3 Weeks",
                    price: "€45"
                },
                {
                    name: "Volume - Refill 4 Weeks",
                    price: "€50"
                }
            ]
        },


        "lash-lift": {
            category: "LASHES",
            title: "Lash Lifts",
            description: "Explore the lash lift treatments available at DUA Beauty Studio.",

            items: [
                {
                    name: "Lash Volume Lift - Without Dye",
                    price: "€55",
                    duration: "60 min"
                },
                {
                    name: "Lash Volume Lift - With Dye",
                    price: "€65",
                    duration: "70 min"
                },
                {
                    name: "Korean Lash Lift - Without Dye",
                    price: "€55"
                },
                {
                    name: "Korean Lash Lift - With Dye",
                    price: "€65"
                }
            ]
        },


        brows: {
            category: "BROWS",
            title: "Brow Styling",
            description: "Discover the available brow styling and waxing treatments.",

            items: [
                {
                    name: "Brows Wax / Tweeze",
                    price: "€15"
                },
                {
                    name: "Hybrid Brows Dye",
                    price: "€25"
                },
                {
                    name: "Hybrid Brows Dye + Tweeze",
                    price: "€35"
                },
                {
                    name: "Brows + Lashes Dye",
                    price: "€20"
                },
                {
                    name: "Hybrid Brows + Lashes Dye",
                    price: "€40"
                },
                {
                    name: "Wax Upper Lip / Chin",
                    price: "€15"
                }
            ]
        },


        "brow-lamination": {
            category: "BROWS",
            title: "Brow Lamination",
            description: "Choose the brow lamination treatment that suits you.",

            items: [
                {
                    name: "Brow Lamination - Excluding Dye",
                    price: "€50"
                },
                {
                    name: "Brow Lamination - Including Dye",
                    price: "€60"
                }
            ]
        },


        henna: {
            category: "BROWS",
            title: "Henna Brows",
            description: "Discover the Henna Brows treatment at DUA Beauty Studio.",

            items: [
                {
                    name: "Brow Henna incl. Wax",
                    price: "€65"
                }
            ]
        }

    };


    /* =================================================
       03. CURRENT YEAR
    ================================================= */

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =================================================
       04. MOBILE NAVIGATION
    ================================================= */

    function openMenu() {

        if (!menuToggle || !navigation) return;

        navigation.classList.add("open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

        document.body.classList.add("menu-open");

    }


    function closeMenu() {

        if (!menuToggle || !navigation) return;

        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        document.body.classList.remove("menu-open");

    }


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        navLinks.forEach(link => {

            link.addEventListener("click", closeMenu);

        });


        document.addEventListener("click", event => {

            const clickedInsideMenu =
                navigation.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                closeMenu();
            }

        });


        window.addEventListener("resize", () => {

            if (window.innerWidth > 850) {
                closeMenu();
            }

        });

    }


    /* =================================================
       05. HEADER SCROLL EFFECT
    ================================================= */

    function updateHeader() {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 35
        );

    }


    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    /* =================================================
       06. SCROLL REVEAL ANIMATIONS
    ================================================= */

    const revealElements = document.querySelectorAll(`
        .section-label,
        .intro-layout,
        .feature-item,
        .about-image-wrapper,
        .about-content,
        .treatments-heading-layout,
        .treatment-card,
        .treatments-footer,
        .experience-content,
        .gallery-header,
        .gallery-item,
        .gallery-footer,
        .booking-inner,
        .footer-main
    `);


    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


    if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {

        revealElements.forEach(element => {
            element.classList.add("reveal");
        });


        const revealObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        });


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    }


    document.documentElement.classList.add("js-loaded");


    /* =================================================
       07. ACTIVE NAVIGATION LINK
    ================================================= */

    const sections = document.querySelectorAll("main section[id]");


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const currentId = entry.target.id;

                navLinks.forEach(link => {

                    const target = link.getAttribute("href");

                    link.classList.toggle(
                        "active",
                        target === `#${currentId}`
                    );

                });

            });

        }, {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        });


        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }


    /* =================================================
       08. SMOOTH SCROLL
    ================================================= */

    const internalLinks = document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion.matches
                    ? "auto"
                    : "smooth"
            });

            if (history.replaceState) {
                history.replaceState(null, "", targetId);
            }

        });

    });


    /* =================================================
       09. GALLERY VIDEO
    ================================================= */

    const galleryVideos = document.querySelectorAll(
        ".gallery-item video"
    );


    if ("IntersectionObserver" in window) {

        const videoObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                const video = entry.target;

                if (entry.isIntersecting) {

                    const playPromise = video.play();

                    if (playPromise !== undefined) {
                        playPromise.catch(() => {
                            // Browser autoplay restrictions.
                        });
                    }

                } else {

                    video.pause();

                }

            });

        }, {
            threshold: 0.15
        });


        galleryVideos.forEach(video => {
            videoObserver.observe(video);
        });

    }


    /* =================================================
       10. IMAGE LOADING
    ================================================= */

    const images = document.querySelectorAll("img");


    images.forEach(image => {

        if (image.complete) {

            image.classList.add("loaded");

        } else {

            image.addEventListener("load", () => {
                image.classList.add("loaded");
            }, {
                once: true
            });

        }


        image.addEventListener("error", () => {
            image.classList.add("image-error");
        }, {
            once: true
        });

    });


    /* =================================================
       11. TREATMENT MODAL
    ================================================= */

    function openTreatmentModal(treatmentKey, triggerElement) {

        if (!modal) return;

        const treatment = treatments[treatmentKey];

        if (!treatment) return;

        lastFocusedElement = triggerElement || document.activeElement;

        modalCategory.textContent = treatment.category;
        modalTitle.textContent = treatment.title;
        modalDescription.textContent = treatment.description;

        modalTreatmentList.innerHTML = "";


        treatment.items.forEach(item => {

            const treatmentItem = document.createElement("div");

            treatmentItem.className = "modal-treatment-item";


            const info = document.createElement("div");

            info.className = "modal-treatment-info";


            const name = document.createElement("span");

            name.className = "modal-treatment-name";
            name.textContent = item.name;


            info.appendChild(name);


            if (item.duration) {

                const duration = document.createElement("span");

                duration.className = "modal-treatment-duration";
                duration.textContent = item.duration;

                info.appendChild(duration);

            }


            const price = document.createElement("span");

            price.className = "modal-treatment-price";
            price.textContent = item.price;


            treatmentItem.appendChild(info);
            treatmentItem.appendChild(price);

            modalTreatmentList.appendChild(treatmentItem);

        });


        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        if (modalClose) {
            modalClose.focus();
        }

    }


    function closeTreatmentModal() {

        if (!modal || !modal.classList.contains("active")) return;

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (
            lastFocusedElement &&
            typeof lastFocusedElement.focus === "function"
        ) {
            lastFocusedElement.focus();
        }

    }


    const treatmentTriggers = document.querySelectorAll(
        "[data-treatment]"
    );


    treatmentTriggers.forEach(trigger => {

        trigger.addEventListener("click", event => {

            event.preventDefault();

            const treatmentKey = trigger.dataset.treatment;

            openTreatmentModal(treatmentKey, trigger);

        });

    });


    if (modalClose) {
        modalClose.addEventListener("click", closeTreatmentModal);
    }


    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeTreatmentModal);
    }


    /* =================================================
       12. MODAL KEYBOARD ACCESSIBILITY
    ================================================= */

    document.addEventListener("keydown", event => {

        if (!modal || !modal.classList.contains("active")) return;


        if (event.key === "Escape") {

            closeTreatmentModal();

            return;

        }


        if (event.key === "Tab") {

            const focusableElements = modal.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];


            if (event.shiftKey && document.activeElement === firstElement) {

                event.preventDefault();
                lastElement.focus();

            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {

                event.preventDefault();
                firstElement.focus();

            }

        }

    });


    /* =================================================
       13. BOOKING LINKS
    ================================================= */

    const bookingLinks = document.querySelectorAll(
        'a[href="https://ig.me/m/dua.beautystudio"]'
    );


    bookingLinks.forEach(link => {

        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

    });


    /* =================================================
       14. REDUCED MOTION
    ================================================= */

    if (prefersReducedMotion.matches) {

        document.documentElement.classList.add("reduced-motion");

    }


    /* =================================================
       15. PAGE LOADED
    ================================================= */

    window.addEventListener("load", () => {

        document.body.classList.add("page-loaded");

    });

});
