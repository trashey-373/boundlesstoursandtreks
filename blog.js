// Blog Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Category filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const blogPosts = document.querySelectorAll('.post-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      blogPosts.forEach(post => {
        if (filter === 'all' || post.getAttribute('data-category') === filter) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.subscribe-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        // Show success message
        showNotification('Thank you for subscribing! You\'ll receive our latest travel stories soon.', 'success');
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }
  
  // Email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Notification function
  function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-20px)';
      
      // Remove after animation
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
  
  // Add notification styles to the page
  const notificationStyles = document.createElement('style');
  notificationStyles.innerHTML = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .notification.success {
      background: #27ae60;
    }
    
    .notification.error {
      background: #e74c3c;
    }
  `;
  document.head.appendChild(notificationStyles);
  
  // Add hover effect to read more links
  const readMoreLinks = document.querySelectorAll('.read-more');
  
  readMoreLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const arrow = link.querySelector('i');
      arrow.style.transform = 'translateX(5px)';
    });
    
    link.addEventListener('mouseleave', () => {
      const arrow = link.querySelector('i');
      arrow.style.transform = 'translateX(0)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postContent = this.closest('.post-content');
            const hiddenContent = postContent.querySelector('.hidden-content');
            
            // Toggle visibility
            if (hiddenContent.style.display === 'block') {
                hiddenContent.style.display = 'none';
                this.classList.remove('active');
            } else {
                hiddenContent.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});