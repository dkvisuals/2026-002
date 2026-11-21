
/* =====================================================
   DUA BEAUTY STUDIO
   Language System — Dutch / English
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       01. TRANSLATIONS
    ================================================= */

    const translations = {

        en: {

            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.treatments": "Treatments",
            "nav.gallery": "Gallery",
            "nav.contact": "Contact",
            "nav.book": "Book an appointment",

            // Announcement
            "announcement": "BOOK YOUR APPOINTMENT • GLOW EVERY DAY",

            // Hero
            "hero.eyebrow": "DUA BEAUTY STUDIO · ALMERE",
            "hero.title": "Beauty is in<br>the <em>details.</em>",
            "hero.description": "Elevated beauty, every day. Discover a place where beauty and self-care come together.",
            "hero.treatments": "Discover our treatments",
            "hero.discover": "Discover DUA",
            "hero.side": "BEAUTY · CONFIDENCE · SELF-CARE",
            "hero.scroll": "SCROLL TO DISCOVER",

            // Brand intro
            "intro.label": "A MOMENT FOR YOURSELF",
            "intro.title": "A little moment<br>of <em>self-love.</em>",
            "intro.description": "Beauty is more than just appearance. It's about feeling confident, taking time for yourself and embracing what makes you unique.",
            "intro.link": "Explore our services",

            // Feature strip
            "feature.detail": "Attention to detail",
            "feature.precision": "Beauty & precision",
            "feature.natural": "Natural beauty",
            "feature.care": "A moment of self-care",

            // About
            "about.label": "GET TO KNOW US",
            "about.caption": "THE DUA EXPERIENCE",
            "about.title": "Where beauty<br>meets <em>confidence.</em>",
            "about.lead": "Your beauty, your moment.",
            "about.description1": "Welcome to DUA Beauty Studio, a place where beauty and self-care come together.",
            "about.description2": "Our focus is on enhancing your natural beauty and creating a moment in which you can take time for yourself.",
            "about.button": "Get in touch",

            // Treatments
            "treatments.label": "OUR SERVICES",
            "treatments.title": "Beauty, tailored<br><em>to you.</em>",
            "treatments.description": "Discover our treatments and find the perfect service to enhance your natural beauty. From lashes to brows, every detail matters.",
            "treatments.category.lashes": "LASHES",
            "treatments.category.brows": "BROWS",

            "treatment.lashes.title": "Lash Extensions",
            "treatment.lashes.description": "Enhance your eyes with beautiful lash extensions tailored to your look.",

            "treatment.lift.title": "Lash Lift",
            "treatment.lift.description": "Give your natural lashes a beautifully lifted appearance.",

            "treatment.brows.title": "Brow Styling",
            "treatment.brows.description": "Define and enhance your brows with carefully selected treatments.",

            "treatment.lamination.title": "Brow Lamination",
            "treatment.lamination.description": "Create a fuller-looking brow with a beautifully styled finish.",

            "treatment.henna.title": "Henna Brows",
            "treatment.henna.description": "Add definition and colour to your brows with a henna treatment.",

            "treatments.discover": "Discover treatment",
            "treatments.footer": "NOT SURE WHICH TREATMENT IS RIGHT FOR YOU?",
            "treatments.contact": "Get in touch",

            // Experience
            "experience.eyebrow": "THE DUA EXPERIENCE",
            "experience.title": "Feel good.<br>Look <em>beautiful.</em>",
            "experience.description": "Take a moment for yourself and let your natural beauty shine.",
            "experience.button": "Book your appointment",

            // Gallery
            "gallery.label": "A GLIMPSE OF DUA",
            "gallery.title": "Beauty in every<br><em>detail.</em>",
            "gallery.description": "Discover a glimpse of the DUA Beauty Studio experience and follow us on Instagram for more inspiration.",
            "gallery.instagram": "Follow us on Instagram",
            "gallery.detail": "BEAUTY DETAILS",
            "gallery.experience": "THE DUA EXPERIENCE",
            "gallery.moment": "YOUR BEAUTY MOMENT",

            // Booking
            "booking.label": "YOUR BEAUTY MOMENT AWAITS",
            "booking.title": "Ready for your<br><em>moment?</em>",
            "booking.description": "Your next beauty appointment is just one message away.",
            "booking.button": "Book your appointment",

            // Footer
            "footer.description": "Elevated beauty, every day. A little moment of self-care.",
            "footer.explore": "EXPLORE",
            "footer.contact": "GET IN TOUCH",
            "footer.note": "A little moment for yourself. A beautiful feeling that stays.",
            "footer.booking": "Book an appointment",
            "footer.location": "Almere, The Netherlands",
            "footer.made": "MADE WITH CARE",
            "footer.top": "BACK TO TOP",

            // Modal
            "modal.category": "OUR TREATMENTS",
            "modal.book": "Book your appointment",
            "modal.duration": "min",

            // Treatment data
            "item.onebyone.new": "One By One - New Set",
            "item.onebyone.refill2": "One By One - Refill 2 Weeks",
            "item.onebyone.refill3": "One By One - Refill 3 Weeks",
            "item.onebyone.refill4": "One By One - Refill 4 Weeks",
            "item.volume.new": "Volume 2D/6D - New Set",
            "item.volume.refill2": "Volume - Refill 2 Weeks",
            "item.volume.refill3": "Volume - Refill 3 Weeks",
            "item.volume.refill4": "Volume - Refill 4 Weeks",

            "item.lift.volume.no": "Lash Volume Lift - Without Dye",
            "item.lift.volume.yes": "Lash Volume Lift - With Dye",
            "item.lift.korean.no": "Korean Lash Lift - Without Dye",
            "item.lift.korean.yes": "Korean Lash Lift - With Dye",

            "item.brows.wax": "Brows Wax / Tweeze",
            "item.brows.hybrid": "Hybrid Brows Dye",
            "item.brows.hybrid.tweeze": "Hybrid Brows Dye + Tweeze",
            "item.brows.lashes": "Brows + Lashes Dye",
            "item.brows.hybrid.lashes": "Hybrid Brows + Lashes Dye",
            "item.brows.upperlip": "Wax Upper Lip / Chin",

            "item.lamination.no": "Brow Lamination - Excluding Dye",
            "item.lamination.yes": "Brow Lamination - Including Dye",

            "item.henna": "Brow Henna incl. Wax",

            // General
            "general.from": "From"
        },


        nl: {

            // Navigatie
            "nav.home": "Home",
            "nav.about": "Over ons",
            "nav.treatments": "Behandelingen",
            "nav.gallery": "Galerij",
            "nav.contact": "Contact",
            "nav.book": "Maak een afspraak",

            // Announcement
            "announcement": "MAAK EEN AFSPRAAK • STRAAL ELKE DAG",

            // Hero
            "hero.eyebrow": "DUA BEAUTY STUDIO · ALMERE",
            "hero.description": "Elke dag stralend mooi. Ontdek een plek waar schoonheid en selfcare samenkomen.",
            "hero.treatments": "Ontdek onze behandelingen",
            "hero.discover": "Ontdek DUA",
            "hero.side": "SCHOONHEID · ZELFVERTROUWEN · SELFCARE",
            "hero.scroll": "SCROLL OM TE ONTDEKKEN",

            // Brand intro
            "intro.label": "EEN MOMENT VOOR JEZELF",
            "intro.title": "Een klein moment<br>van <em>zelfliefde.</em>",
            "intro.description": "Schoonheid gaat om meer dan alleen uiterlijk. Het draait om zelfvertrouwen, tijd nemen voor jezelf en omarmen wat jou uniek maakt.",
            "intro.link": "Ontdek onze behandelingen",

            // Feature strip
            "feature.detail": "Oog voor detail",
            "feature.precision": "Schoonheid & precisie",
            "feature.natural": "Natuurlijke schoonheid",
            "feature.care": "Een moment voor jezelf",

            // Over ons
            "about.label": "LEER ONS KENNEN",
            "about.caption": "DE DUA ERVARING",
            "about.title": "Waar schoonheid<br>en <em>zelfvertrouwen</em> samenkomen.",
            "about.lead": "Jouw schoonheid, jouw moment.",
            "about.description1": "Welkom bij DUA Beauty Studio, een plek waar schoonheid en selfcare samenkomen.",
            "about.description2": "Onze focus ligt op het versterken van jouw natuurlijke schoonheid en het creëren van een moment waarop je even tijd voor jezelf kunt nemen.",
            "about.button": "Neem contact op",

            // Behandelingen
            "treatments.label": "ONZE BEHANDELINGEN",
            "treatments.title": "Schoonheid, afgestemd<br><em>op jou.</em>",
            "treatments.description": "Ontdek onze behandelingen en vind de perfecte service om jouw natuurlijke schoonheid te accentueren. Van wimpers tot wenkbrauwen: elk detail telt.",
            "treatments.category.lashes": "WIMPERS",
            "treatments.category.brows": "WENKBRAUWEN",

            "treatment.lashes.title": "Wimperextensions",
            "treatment.lashes.description": "Laat je ogen spreken met prachtige wimperextensions, afgestemd op jouw wensen.",

            "treatment.lift.title": "Lash Lift",
            "treatment.lift.description": "Geef je natuurlijke wimpers een prachtig gelifte uitstraling.",

            "treatment.brows.title": "Wenkbrauwstyling",
            "treatment.brows.description": "Geef je wenkbrauwen vorm en accentueer ze met zorgvuldig gekozen behandelingen.",

            "treatment.lamination.title": "Brow Lamination",
            "treatment.lamination.description": "Creëer een vollere uitstraling met prachtig gestylde wenkbrauwen.",

            "treatment.henna.title": "Henna Brows",
            "treatment.henna.description": "Geef je wenkbrauwen meer definitie en kleur met een hennabehandeling.",

            "treatments.discover": "Bekijk behandeling",
            "treatments.footer": "WEET JE NIET ZEKER WELKE BEHANDELING BIJ JE PAST?",
            "treatments.contact": "Neem contact op",

            // Experience
            "experience.eyebrow": "DE DUA ERVARING",
            "experience.title": "Voel je goed.<br>Zie er <em>stralend</em> uit.",
            "experience.description": "Neem een moment voor jezelf en laat je natuurlijke schoonheid stralen.",
            "experience.button": "Maak een afspraak",

            // Galerij
            "gallery.label": "EEN KIJKJE BIJ DUA",
            "gallery.title": "Schoonheid in elk<br><em>detail.</em>",
            "gallery.description": "Krijg een indruk van de DUA Beauty Studio-ervaring en volg ons op Instagram voor meer inspiratie.",
            "gallery.instagram": "Volg ons op Instagram",
            "gallery.detail": "BEAUTY DETAILS",
            "gallery.experience": "DE DUA ERVARING",
            "gallery.moment": "JOUW BEAUTYMOMENT",

            // Afspraak
            "booking.label": "JOUW BEAUTYMOMENT WACHT OP JE",
            "booking.title": "Klaar voor jouw<br><em>moment?</em>",
            "booking.description": "Je volgende beautyafspraak is slechts één berichtje verwijderd.",
            "booking.button": "Maak een afspraak",

            // Footer
            "footer.description": "Elke dag stralend mooi. Een klein moment voor jezelf.",
            "footer.explore": "ONTDEK",
            "footer.contact": "CONTACT",
            "footer.note": "Een klein moment voor jezelf. Een mooi gevoel dat blijft.",
            "footer.booking": "Maak een afspraak",
            "footer.location": "Almere, Nederland",
            "footer.made": "MET ZORG GEMAAKT",
            "footer.top": "TERUG NAAR BOVEN",

            // Modal
            "modal.category": "ONZE BEHANDELINGEN",
            "modal.book": "Maak een afspraak",
            "modal.duration": "min",

            // Behandelingsnamen
            "item.onebyone.new": "One By One - Nieuwe set",
            "item.onebyone.refill2": "One By One - Opvullen na 2 weken",
            "item.onebyone.refill3": "One By One - Opvullen na 3 weken",
            "item.onebyone.refill4": "One By One - Opvullen na 4 weken",
            "item.volume.new": "Volume 2D/6D - Nieuwe set",
            "item.volume.refill2": "Volume - Opvullen na 2 weken",
            "item.volume.refill3": "Volume - Opvullen na 3 weken",
            "item.volume.refill4": "Volume - Opvullen na 4 weken",

            "item.lift.volume.no": "Lash Volume Lift - Zonder verven",
            "item.lift.volume.yes": "Lash Volume Lift - Met verven",
            "item.lift.korean.no": "Korean Lash Lift - Zonder verven",
            "item.lift.korean.yes": "Korean Lash Lift - Met verven",

            "item.brows.wax": "Wenkbrauwen waxen / epileren",
            "item.brows.hybrid": "Hybrid Brows verven",
            "item.brows.hybrid.tweeze": "Hybrid Brows verven + epileren",
            "item.brows.lashes": "Wenkbrauwen + wimpers verven",
            "item.brows.hybrid.lashes": "Hybrid Brows + wimpers verven",
            "item.brows.upperlip": "Bovenlip / kin waxen",

            "item.lamination.no": "Brow Lamination - Zonder verven",
            "item.lamination.yes": "Brow Lamination - Met verven",

            "item.henna": "Brow Henna incl. waxen",

            // Algemeen
            "general.from": "Vanaf"
        }

    };


    /* =================================================
       02. LANGUAGE DETECTION
    ================================================= */

    const savedLanguage = localStorage.getItem("dua-language");

    const browserLanguage = navigator.language ||
        navigator.userLanguage ||
        "en";

    const detectedLanguage = browserLanguage
        .toLowerCase()
        .startsWith("nl")
        ? "nl"
        : "en";

    let currentLanguage = savedLanguage || detectedLanguage;


    /* =================================================
       03. TRANSLATION FUNCTION
    ================================================= */

    function translate(key) {

        return translations[currentLanguage][key] ||
               translations.en[key] ||
               key;

    }


    /* =================================================
       04. UPDATE HTML CONTENT
    ================================================= */

    const textMap = {

        ".announcement-bar p": "announcement",

        ".hero-eyebrow": "hero.eyebrow",
        ".hero-description": "hero.description",

        ".intro-text p": "intro.description",

        ".about-image-caption span:first-child": "about.caption",

        ".about-content .about-lead": "about.lead",

        ".about-content .about-description:first-of-type": "about.description1",

        ".about-content .about-description:last-of-type": "about.description2",

        ".treatments-heading-layout p": "treatments.description",

        ".treatments-footer p": "treatments.footer",

        ".experience-eyebrow": "experience.eyebrow",
        ".experience-content p": "experience.description",

        ".gallery-intro p": "gallery.description",

        ".booking-inner > p": "booking.description",

        ".footer-brand > p": "footer.description",

        ".footer-note p": "footer.note"

    };


    const htmlMap = {

        ".hero-content h1": "hero.title",
        ".intro-layout h2": "intro.title",
        ".about-content h2": "about.title",
        ".treatments-heading-layout h2": "treatments.title",
        ".experience-content h2": "experience.title",
        ".gallery-header h2": "gallery.title",
        ".booking-inner h2": "booking.title"

    };


    const attributeMap = {

        ".menu-toggle": {
            "aria-label": {
                en: "Open navigation menu",
                nl: "Open navigatiemenu"
            }
        },

        ".treatment-modal-close": {
            "aria-label": {
                en: "Close treatment details",
                nl: "Behandeldetails sluiten"
            }
        }

    };


    function updatePageLanguage() {

        document.documentElement.lang = currentLanguage;

        // Text content
        Object.entries(textMap).forEach(([selector, key]) => {

            const element = document.querySelector(selector);

            if (element) {
                element.textContent = translate(key);
            }

        });


        // HTML content
        Object.entries(htmlMap).forEach(([selector, key]) => {

            const element = document.querySelector(selector);

            if (element) {
                element.innerHTML = translate(key);
            }

        });


        // Navigation
        const navigationMap = {
            ".main-navigation a:nth-child(1)": "nav.home",
            ".main-navigation a:nth-child(2)": "nav.about",
            ".main-navigation a:nth-child(3)": "nav.treatments",
            ".main-navigation a:nth-child(4)": "nav.gallery",
            ".main-navigation a:nth-child(5)": "nav.contact"
        };

        Object.entries(navigationMap).forEach(([selector, key]) => {

            const element = document.querySelector(selector);

            if (element) {
                element.textContent = translate(key);
            }

        });


        // Buttons and links
        const buttonMap = [
            [".header-cta span:first-child", "nav.book"],
            [".hero-actions .button-light", "hero.treatments"],
            [".hero-secondary-link", "hero.discover"],
            [".intro-text .text-link", "intro.link"],
            [".about-content .button-outline", "about.button"],
            [".treatments-footer .text-link", "treatments.contact"],
            [".experience-content .button-light", "experience.button"],
            [".gallery-intro .text-link", "gallery.instagram"],
            [".booking-button", "booking.button"],
            [".treatment-modal-content > .button", "modal.book"]
        ];

        buttonMap.forEach(([selector, key]) => {

            const element = document.querySelector(selector);

            if (!element) return;

            const arrow = element.querySelector("span:last-child");

            element.textContent = translate(key);

            if (arrow && element.classList.contains("button")) {
                element.appendChild(arrow);
            }

        });


        // Section labels
        const labelMap = [
            [".about-content .section-label", "about.label"],
            [".treatments-section > .section-label", "treatments.label"],
            [".gallery-section > .section-label", "gallery.label"],
            [".booking-inner .section-label", "booking.label"]
        ];

        labelMap.forEach(([selector, key]) => {

            const element = document.querySelector(selector);

            if (!element) return;

            const spans = element.querySelectorAll("span");

            if (spans.length >= 3) {
                spans[2].textContent = translate(key);
            }

        });


        // Treatment cards
        const treatmentCards = [
            {
                selector: ".treatment-card:nth-child(1)",
                title: "treatment.lashes.title",
                description: "treatment.lashes.description"
            },
            {
                selector: ".treatment-card:nth-child(2)",
                title: "treatment.lift.title",
                description: "treatment.lift.description"
            },
            {
                selector: ".treatment-card:nth-child(3)",
                title: "treatment.brows.title",
                description: "treatment.brows.description"
            },
            {
                selector: ".treatment-card:nth-child(4)",
                title: "treatment.lamination.title",
                description: "treatment.lamination.description"
            },
            {
                selector: ".treatment-card:nth-child(5)",
                title: "treatment.henna.title",
                description: "treatment.henna.description"
            }
        ];

        treatmentCards.forEach(card => {

            const element = document.querySelector(card.selector);

            if (!element) return;

            const title = element.querySelector("h3");
            const description = element.querySelector(".treatment-card-content p");

            if (title) title.textContent = translate(card.title);

            if (description) {
                description.textContent = translate(card.description);
            }

        });


        // Treatment category labels
        document.querySelectorAll(".treatment-card").forEach((card, index) => {

            const category = card.querySelector(".treatment-card-top span:first-child");

            if (!category) return;

            category.textContent = index === 0 || index === 1
                ? translate("treatments.category.lashes")
                : translate("treatments.category.brows");

        });


        // Treatment links
        document.querySelectorAll(".treatment-link").forEach(link => {

            const arrow = link.querySelector("span:last-child");

            link.textContent = translate("treatments.discover") + " ";

            if (arrow) link.appendChild(arrow);

        });


        // Feature strip
        const features = [
            "feature.detail",
            "feature.precision",
            "feature.natural",
            "feature.care"
        ];

        document.querySelectorAll(".feature-item > span:last-child").forEach((element, index) => {

            if (features[index]) {
                element.textContent = translate(features[index]);
            }

        });


        // Experience and gallery captions
        const galleryCaptions = document.querySelectorAll(".gallery-overlay span:first-child");

        const captionKeys = [
            "gallery.label",
            "gallery.detail",
            "gallery.experience",
            "gallery.moment"
        ];

        galleryCaptions.forEach((element, index) => {

            if (captionKeys[index]) {
                element.textContent = translate(captionKeys[index]);
            }

        });


        // Footer
        const footerColumns = document.querySelectorAll(".footer-column");

        if (footerColumns[0]) {
            footerColumns[0].querySelector(".footer-heading").textContent = translate("footer.explore");

            const links = footerColumns[0].querySelectorAll("a");

            const keys = ["nav.home", "nav.about", "nav.treatments", "nav.gallery"];

            links.forEach((link, index) => {
                if (keys[index]) link.textContent = translate(keys[index]);
            });
        }

        if (footerColumns[1]) {
            footerColumns[1].querySelector(".footer-heading").textContent = translate("footer.contact");

            const links = footerColumns[1].querySelectorAll("a");

            if (links[1]) links[1].textContent = translate("footer.booking") + " ↗";

            const location = footerColumns[1].querySelector("span");

            if (location) location.textContent = translate("footer.location");
        }


        // Footer bottom
        const footerBottom = document.querySelector(".footer-bottom");

        if (footerBottom) {

            const spans = footerBottom.querySelectorAll("span");

            if (spans[1]) spans[1].textContent = translate("footer.made");

            const topLink = footerBottom.querySelector(".back-to-top");

            if (topLink) topLink.textContent = translate("footer.top") + " ↑";

        }


        // Attribute translations
        Object.entries(attributeMap).forEach(([selector, attributes]) => {

            const element = document.querySelector(selector);

            if (!element) return;

            Object.entries(attributes).forEach(([attribute, values]) => {
                element.setAttribute(attribute, values[currentLanguage]);
            });

        });


        // Language switcher appearance
        document.querySelectorAll(".language-toggle [data-lang]").forEach(element => {

            element.classList.toggle(
                "active",
                element.dataset.lang === currentLanguage
            );

        });


        // Update modal if it is open
        if (
            window.duaUpdateTreatmentLanguage &&
            typeof window.duaUpdateTreatmentLanguage === "function"
        ) {
            window.duaUpdateTreatmentLanguage(currentLanguage);
        }

    }


    /* =================================================
       05. LANGUAGE SWITCHER
    ================================================= */

    function setLanguage(language) {

        if (!translations[language]) return;

        currentLanguage = language;

        localStorage.setItem("dua-language", language);

        updatePageLanguage();

    }


    const languageToggle = document.querySelector(".language-toggle");

    if (languageToggle) {

        languageToggle.addEventListener("click", () => {

            const nextLanguage = currentLanguage === "en"
                ? "nl"
                : "en";

            setLanguage(nextLanguage);

        });

    }


    /* =================================================
       06. INITIALIZE
    ================================================= */

    updatePageLanguage();


    /* =================================================
       07. PUBLIC LANGUAGE API
    ================================================= */

    window.duaLanguage = {

        get: () => currentLanguage,

        set: setLanguage,

        translate: translate

    };

});
