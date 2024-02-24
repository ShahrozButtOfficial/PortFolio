// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Typed.js initialization
    var options = {
        strings: ['Web Developer', 'Designer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    };

    var typed = new Typed('.typed-intro', options);

    // GSAP header animation
    gsap.from('.hero-content h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });

    gsap.from('.hero-content p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1
    });

    gsap.from('.nav-links li', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 1.5
    });

    // AOS initialization
    AOS.init();

    // ScrollReveal initialization
    ScrollReveal().reveal('.project', {
        delay: 200,
        easing: 'ease-in-out',
        scale: 0.9,
    });

     // Toggle menu on mobile
     var menuToggle = document.getElementById('menuToggle');
     var navLinks = document.querySelector('.menu .nav-links');
 
     menuToggle.addEventListener('click', function () {
         navLinks.classList.toggle('show');
     });
 
     // Close menu when a link is clicked
     navLinks.addEventListener('click', function () {
         navLinks.classList.remove('show');
     });
});
