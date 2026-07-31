// ==========================================================
// Portfolio JavaScript
// Author: Anoop BP
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------------------
    // Mobile nav toggle
    // ------------------------------------------------------
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {

        navToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");
            navToggle.classList.toggle("open", isOpen);
            navToggle.setAttribute("aria-expanded", isOpen);

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");
                navToggle.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");

            });

        });

    }

    // ------------------------------------------------------
    // Smooth scrolling for in-page links
    // ------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // ------------------------------------------------------
    // Footer year
    // ------------------------------------------------------
    const yearEl = document.getElementById("year");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    revealOnScroll();

});


// ==========================================================
// Sticky header shadow
// ==========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.boxShadow = window.scrollY > 40
        ? "0 10px 30px rgba(0,0,0,.35)"
        : "none";

});


// ==========================================================
// Active navigation link
// ==========================================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 130;

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


// ==========================================================
// Scroll reveal animation
// ==========================================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - revealPoint) {
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);