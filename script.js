// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    if (!link.classList.contains('close-btn')) {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
});

// Carousel Functionality - ONLY KEEP THIS ONE
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-nav';
    
    // Create dots
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    document.querySelector('.carousel').appendChild(dotsContainer);
    
    let currentIndex = 0;
    const totalItems = items.length;
    const dots = document.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active class on slides
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Auto-rotate carousel
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 3000);
    
    // Pause on hover
    document.querySelector('.carousel').addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 3000);
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelector('.carousel').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    document.querySelector('.carousel').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            currentIndex = (currentIndex + 1) % totalItems;
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right - previous slide
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        updateCarousel();
    }
    
    // Initialize first slide
    updateCarousel();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});