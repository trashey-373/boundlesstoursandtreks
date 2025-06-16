document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.style.width = mobileMenu.style.width === '250px' ? '0' : '250px';
    }

    function closeMobileMenu() {
        document.getElementById('mobileMenu').style.width = '0';
    }

    // Attach event listeners
    document.querySelector('.mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
    document.querySelector('.close-btn').addEventListener('click', closeMobileMenu);

    // Tour filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tourCards = document.querySelectorAll('.tour-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter tours
            tourCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'newsletter-feedback';
            
            // Remove any existing feedback
            const existingFeedback = this.querySelector('.newsletter-feedback');
            if (existingFeedback) {
                existingFeedback.remove();
            }
            
            // Validate email
            if (!email) {
                feedbackDiv.textContent = 'Please enter an email address';
                feedbackDiv.classList.add('newsletter-error');
                this.appendChild(feedbackDiv);
                feedbackDiv.style.display = 'block';
                return;
            }

            if (!isValidEmail(email)) {
                feedbackDiv.textContent = 'Please enter a valid email address';
                feedbackDiv.classList.add('newsletter-error');
                this.appendChild(feedbackDiv);
                feedbackDiv.style.display = 'block';
                return;
            }

            // Simulate form submission (replace with actual AJAX call in production)
            setTimeout(() => {
                feedbackDiv.textContent = 'Thank you for subscribing!';
                feedbackDiv.classList.add('newsletter-success');
                this.appendChild(feedbackDiv);
                feedbackDiv.style.display = 'block';
                emailInput.value = '';
                
                // Remove feedback after 5 seconds
                setTimeout(() => {
                    feedbackDiv.style.display = 'none';
                }, 5000);
            }, 500);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});