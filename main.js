document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Navigation & Header Logic
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    // 2. Animate on Scroll (AOS) Initialization
    AOS.init({
        duration: 1000,
        offset: 100,
        once: true,
        easing: 'ease-out-cubic',
    });
    
    // 3. Typewriter Effect for Hero Section
    const typewriterElement = document.getElementById('typewriter');
    if(typewriterElement) {
        const words = ["Success.", "Innovation.", "Growth.", "Perfection."];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            const typeSpeed = isDeleting ? 75 : 150;

            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }


    // 4. Particles.js for Hero Background
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.3, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#8A3FFC", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // 5. Contact Form Simulation (No actual sending)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            setTimeout(() => {
                submitButton.style.background = '#28a745';
                submitButton.textContent = 'Message Sent Successfully!';
                this.reset();
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    submitButton.textContent = 'Submit Inquiry';
                }, 4000);
            }, 1500);
        });
    }

});
