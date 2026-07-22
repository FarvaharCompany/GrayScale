/**
 * app.js - Shared Global Functions
 * Handles Navbar transparency toggle on scroll, and standard accessibility events.
 */

document.addEventListener('DOMContentLoaded', function() {

    // --- NAVBAR SCROLL INTERACTION ---
    const navbar = document.querySelector('.navbar-custom');
    const masthead = document.querySelector('.masthead');

    if (navbar && masthead) {
        // Initial check in case page loads on a specific anchor
        window.addEventListener('load', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Listen to scroll events
        window.addEventListener('scroll', function() {
            const scrollDistance = window.scrollY;
            
            // Adding/removing class based on scroll distance
            if (scrollDistance > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // --- BOOTSTRAP 5 SCROLLSPY INITIALIZATION ---
    // Even though data-bs-spy="scroll" is used in HTML, explicit JS init 
    // ensures it overrides default behavior just in case.
    const scrollSpyElement = document.body;
    if (scrollSpyElement) {
        // eslint-disable-next-line no-unused-vars
        const scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40% 0px'
        });
    }

    // --- PREVENT DEFAULT FOR ANCHOR LINKS (Smooth Scroll Improvement) ---
    document.querySelectorAll('#mainNav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's a same-page anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});