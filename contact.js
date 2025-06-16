// Contact Form Validation and FAQ Toggle
document.addEventListener('DOMContentLoaded', () => {
  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    if (!name.value.trim()) {
      isValid = false;
      name.style.borderColor = '#e74c3c';
    } else {
      name.style.borderColor = '#ddd';
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
      isValid = false;
      email.style.borderColor = '#e74c3c';
    } else {
      email.style.borderColor = '#ddd';
    }
    
    if (!subject.value) {
      isValid = false;
      subject.style.borderColor = '#e74c3c';
    } else {
      subject.style.borderColor = '#ddd';
    }
    
    if (!message.value.trim()) {
      isValid = false;
      message.style.borderColor = '#e74c3c';
    } else {
      message.style.borderColor = '#ddd';
    }
    
    if (isValid) {
      // Form submission would go here
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  });
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // FAQ toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other open FAQs
            faqQuestions.forEach(q => {
                if (q !== question && q.parentElement.classList.contains('active')) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
});