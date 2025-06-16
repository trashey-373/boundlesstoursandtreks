// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (mobileMenu.classList.contains('active') && 
      !mobileMenu.contains(event.target) && 
      !menuToggle.contains(event.target)) {
    closeMobileMenu();
  }
});