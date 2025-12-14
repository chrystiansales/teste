/**
 * Government Landing Page - Advanced JavaScript
 * Secretaria da Educação
 * Enhanced with sophisticated visual effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initMobileMenu();
    initBackToTop();
    initDropdowns();
    initStatsAnimation();

    // Advanced effects
    initParticleBackground();
    initTypingAnimation();
    initParallaxEffects();
    initCardTiltEffects();
    initAdvancedScrollAnimations();
    initDynamicNavbar();
    initCursorGlow();
    initMagneticButtons();
    initImageReveal();
    initRippleEffect();
    initSmoothAnchors();
    initHeroSlider();
});

/* ==========================================================================
   PARTICLE BACKGROUND - Floating particles in hero section
   ========================================================================== */

function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;
    hero.style.position = 'relative';
    hero.insertBefore(particleContainer, hero.firstChild);

    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 2;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
    `;

    container.appendChild(particle);
}

// Add particle animation keyframes
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, -${Math.random() * 200 + 100}px) rotate(180deg);
        }
    }
    
    @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
    }
    
    @keyframes blink {
        50% { border-color: transparent; }
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(0, 136, 204, 0.5), 0 0 10px rgba(0, 136, 204, 0.3); }
        50% { box-shadow: 0 0 20px rgba(0, 136, 204, 0.8), 0 0 30px rgba(0, 136, 204, 0.5); }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-60px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(60px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .cursor-glow {
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 136, 204, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        mix-blend-mode: screen;
    }
    
    .magnetic-hover {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .ripple-effect {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    .typing-cursor {
        display: inline-block;
        width: 3px;
        height: 1em;
        background: white;
        margin-left: 5px;
        animation: blink 1s step-end infinite;
        vertical-align: middle;
    }
    
    .reveal-up {
        opacity: 0;
        transform: translateY(60px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .reveal-up.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .reveal-left {
        opacity: 0;
        transform: translateX(-60px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .reveal-left.revealed {
        opacity: 1;
        transform: translateX(0);
    }
    
    .reveal-scale {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .reveal-scale.revealed {
        opacity: 1;
        transform: scale(1);
    }
    
    .stagger-item {
        opacity: 0;
        transform: translateY(40px);
    }
    
    .stagger-item.revealed {
        animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    .card-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
    }
    
    .card-3d-inner {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .shimmer-effect {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
    }
    
    .navbar-scrolled {
        background: rgba(0, 69, 124, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    }
    
    .image-reveal {
        overflow: hidden;
    }
    
    .image-reveal img {
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .image-reveal:hover img {
        transform: scale(1.1);
    }
    
    .btn-glow {
        animation: glow 2s ease-in-out infinite;
    }
    
    .text-gradient {
        background: linear-gradient(135deg, #ffffff, #a0d2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;
document.head.appendChild(particleStyles);

/* ==========================================================================
   TYPING ANIMATION - Typewriter effect for hero title
   ========================================================================== */

function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;

    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.minHeight = '2.5em';

    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    heroTitle.appendChild(cursor);

    let charIndex = 0;
    const typingSpeed = 50;

    function typeChar() {
        if (charIndex < originalText.length) {
            heroTitle.insertBefore(
                document.createTextNode(originalText.charAt(charIndex)),
                cursor
            );
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 2000);
        }
    }

    // Start typing after a small delay
    setTimeout(typeChar, 500);
}

/* ==========================================================================
   PARALLAX EFFECTS - Smooth parallax scrolling
   ========================================================================== */

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .stats-section');

    if (!parallaxElements.length) return;

    function updateParallax() {
        const scrollY = window.scrollY;

        parallaxElements.forEach(element => {
            const speed = 0.3;
            const yPos = -(scrollY * speed);
            element.style.backgroundPositionY = `${yPos}px`;
        });
    }

    window.addEventListener('scroll', throttle(updateParallax, 16));
}

/* ==========================================================================
   3D CARD TILT EFFECTS - Interactive tilt on hover
   ========================================================================== */

function initCardTiltEffects() {
    const cards = document.querySelectorAll('.news-card, .program-card, .quick-item');

    cards.forEach(card => {
        card.classList.add('card-3d');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

/* ==========================================================================
   ADVANCED SCROLL ANIMATIONS - Staggered reveal effects
   ========================================================================== */

function initAdvancedScrollAnimations() {
    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('reveal-left');
    });

    // Cards and items with stagger
    const cardGroups = [
        { selector: '.quick-grid .quick-item', stagger: 80 },
        { selector: '.news-grid .news-card', stagger: 150 },
        { selector: '.programs-grid .program-card', stagger: 100 },
        { selector: '.videos-grid .video-card', stagger: 120 },
        { selector: '.social-grid .social-card', stagger: 100 },
        { selector: '.stats-grid .stat-item', stagger: 150 },
    ];

    cardGroups.forEach(group => {
        const items = document.querySelectorAll(group.selector);
        items.forEach((item, index) => {
            item.classList.add('stagger-item');
            item.style.transitionDelay = `${index * group.stagger}ms`;
        });
    });

    // Create intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale, .stagger-item');
    revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   DYNAMIC NAVBAR - Color change on scroll
   ========================================================================== */

function initDynamicNavbar() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.scrollY;

        // Add scrolled class for background change
        if (currentScroll > 100) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }

        // Hide/show on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, 100));

    header.style.transition = 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease';
}

/* ==========================================================================
   CURSOR GLOW EFFECT - Custom cursor with glow
   ========================================================================== */

function initCursorGlow() {
    // Only on desktop
    if (window.innerWidth < 992 || 'ontouchstart' in window) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.opacity = '0';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    // Smooth follow animation
    function animateGlow() {
        const ease = 0.15;
        glowX += (mouseX - glowX) * ease;
        glowY += (mouseY - glowY) * ease;

        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

/* ==========================================================================
   MAGNETIC BUTTONS - Buttons that follow cursor
   ========================================================================== */

function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .quick-icon, .social-card');

    buttons.forEach(button => {
        button.classList.add('magnetic-hover');

        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

/* ==========================================================================
   IMAGE REVEAL - Smooth image loading effect
   ========================================================================== */

function initImageReveal() {
    const images = document.querySelectorAll('.news-image, .video-thumbnail');

    images.forEach(container => {
        container.classList.add('image-reveal');

        const img = container.querySelector('img');
        if (img) {
            img.style.opacity = '0';
            img.style.transform = 'scale(1.1)';

            if (img.complete) {
                revealImage(img);
            } else {
                img.addEventListener('load', () => revealImage(img));
            }
        }
    });
}

function revealImage(img) {
    img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
}

/* ==========================================================================
   RIPPLE EFFECT - Material design ripple on click
   ========================================================================== */

function initRippleEffect() {
    const rippleElements = document.querySelectorAll('.btn, .quick-item, .nav-link');

    rippleElements.forEach(element => {
        element.classList.add('ripple-effect');

        element.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
            ripple.style.left = x - (rect.width / 2) + 'px';
            ripple.style.top = y - (rect.height / 2) + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

/* ==========================================================================
   SMOOTH ANCHORS - Smooth scrolling for anchor links
   ========================================================================== */

function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ==========================================================================
   HERO SLIDER - Auto-advancing hero slides
   ========================================================================== */

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length <= 1) return;

    let currentSlide = 0;
    const slideInterval = 5000;

    const goToSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    };

    // Auto-advance slides
    setInterval(nextSlide, slideInterval);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}

/* ==========================================================================
   CORE FUNCTIONALITY
   ========================================================================== */

function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('dropdown-toggle')) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', throttle(toggleVisibility, 100));

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', (e) => {
            if (window.innerWidth < 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
}

function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    const animateValue = (element, target) => {
        const duration = 2500;
        const startTime = performance.now();

        const formatNumber = (num) => num.toLocaleString('pt-BR');

        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(target * easeOut);

            element.textContent = formatNumber(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = formatNumber(target);
                // Add pulse effect when complete
                element.style.animation = 'pulse 0.5s ease';
            }
        };

        requestAnimationFrame(updateNumber);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target, 10);
                animateValue(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/* ==========================================================================
   PERFORMANCE OPTIMIZATION - Pause animations when not visible
   ========================================================================== */

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('reduce-motion');
    } else {
        document.body.classList.remove('reduce-motion');
    }
});

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduce-motion');
}

