/*==========================================
GREEN HARVEST MYSORE
MAIN JAVASCRIPT
==========================================*/

// ================================
// Mobile Navigation
// ================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


// ================================
// Sticky Header Shadow
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        header.style.background = "rgba(255,255,255,.98)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.95)";

    }

});


// ================================
// Back To Top Button
// ================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 400) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
    ".section, .product-card, .why-card, .industry-card, .process-card"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

};

revealElements.forEach(el => {

    el.classList.add("fade-up");

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Contact Form
// ================================

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting Green Harvest Mysore!\n\nWe will get back to you shortly."
        );

        form.reset();

    });

}


// ================================
// Current Year in Footer (Optional)
// ================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("✅ Green Harvest Mysore Website Loaded Successfully");