// Booking Form Multi-step Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const submitBtn = document.getElementById('submit-btn');
  const sections = document.querySelectorAll('.form-section');
  const steps = document.querySelectorAll('.step');
  const summarySection = document.querySelector('.booking-summary');
  const confirmationSection = document.getElementById('confirmation-section');
  
  let currentStep = 0;
  
  // Show current section
  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.display = i === index ? 'block' : 'none';
    });
    
    // Update button visibility
    prevBtn.style.display = index > 0 ? 'block' : 'none';
    nextBtn.style.display = index < sections.length - 1 ? 'block' : 'none';
    submitBtn.style.display = index === sections.length - 1 ? 'block' : 'none';
    
    // Update step indicators
    steps.forEach((step, i) => {
      if (i <= index) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }
  
  // Next button click
  nextBtn.addEventListener('click', () => {
    if (currentStep < sections.length - 1) {
      currentStep++;
      showSection(currentStep);
    }
  });
  
  // Previous button click
  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showSection(currentStep);
    }
  });
  
  // Payment method selection
  const paymentOptions = document.querySelectorAll('.payment-option');
  const paymentMethodField = document.getElementById('payment-method');
  const creditCardFields = document.getElementById('credit-card-fields');
  const paypalFields = document.getElementById('paypal-fields');
  const bankTransferFields = document.getElementById('bank-transfer-fields');
  
  paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      paymentOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      option.classList.add('active');
      
      // Set payment method value
      const method = option.getAttribute('data-method');
      paymentMethodField.value = method;
      
      // Show relevant fields
      creditCardFields.style.display = method === 'credit-card' ? 'block' : 'none';
      paypalFields.style.display = method === 'paypal' ? 'block' : 'none';
      bankTransferFields.style.display = method === 'bank-transfer' ? 'block' : 'none';
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide form and summary, show confirmation
    form.style.display = 'none';
    summarySection.style.display = 'none';
    confirmationSection.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Initialize first section
  showSection(currentStep);
});