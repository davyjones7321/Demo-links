(function() {
    'use strict';

    const header = document.querySelector('.header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const fadeElements = document.querySelectorAll('.fade-in');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileToggle && navMobile) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
        });

        document.querySelectorAll('.nav-mobile a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMobile.classList.remove('active');
            });
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    const counters = document.querySelectorAll('.stat-item h3');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const num = parseInt(text.replace(/[^0-9]/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                let current = 0;
                const increment = num / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        target.textContent = text;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.background = '#28a745';
                contactForm.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay h4');
            alert(`Viewing: ${overlay.textContent}`);
        });
    });
})();
