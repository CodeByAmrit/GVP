/**
 * GVP Website Main Interactivity
 * Handles: Hero Slider, Mobile Menu, Sticky Header, Scroll Animations, Stats Counter
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroSlider();
    initScrollAnimations();
    initStatsCounter();
});

/**
 * Navigation & Header Logic
 */
function initNavigation() {
    const header = document.getElementById('main-nav');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('bg-white', 'py-2', 'shadow-xl');
                header.classList.remove('py-4', 'glass-nav');
            } else {
                header.classList.add('py-4', 'glass-nav');
                header.classList.remove('bg-white', 'py-2', 'shadow-xl');
            }
        });
    }

    // Mobile Menu
    const toggleMenu = (show) => {
        if (!mobileMenu) return;
        if (show) {
            mobileMenu.classList.remove('translate-y-full');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('translate-y-full');
            document.body.style.overflow = '';
        }
    };

    menuBtn?.addEventListener('click', () => toggleMenu(true));
    closeBtn?.addEventListener('click', () => toggleMenu(false));
    mobileLinks?.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
}

/**
 * Hero Slider Logic (Auto-slide + Manual)
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    const progress = document.querySelector('.slider-progress');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;

    const showSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        resetProgressBar();
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const resetProgressBar = () => {
        progress.style.transition = 'none';
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.transition = `width ${intervalTime}ms linear`;
            progress.style.width = '100%';
        }, 50);
    };

    const startInterval = () => {
        clearInterval(slideInterval);
        resetProgressBar();
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        startInterval();
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        startInterval();
    });

    // Auto-start
    if (slides.length > 0) {
        startInterval();
    }
}

/**
 * Reveal Animations on Scroll
 */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));
}

/**
 * Stats Counter Logic
 */
function initStatsCounter() {
    const statNums = document.querySelectorAll('[data-target]');
    
    const countUpdate = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const speed = 200;
        const inc = target / speed;
        let count = 0;

        const update = () => {
            if (count < target) {
                count += inc;
                el.innerText = Math.ceil(count) + (target === 100 ? '%' : '+');
                setTimeout(update, 10);
            } else {
                el.innerText = target + (target === 100 ? '%' : '+');
            }
        };
        update();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUpdate(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(num => statsObserver.observe(num));
}
