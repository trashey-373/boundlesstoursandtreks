// Gallery Filtering and Lightbox
document.addEventListener('DOMContentLoaded', () => {
  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Lightbox functionality
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);
  
  galleryItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = link.querySelector('img');
      lightbox.style.backgroundImage = `url(${img.src})`;
      lightbox.classList.add('active');
    });
  });
  
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
  });
  
  // Close lightbox with ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
});

// Add lightbox styles to the page
const lightboxStyles = document.createElement('style');
lightboxStyles.innerHTML = `
  #lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  
  #lightbox.active {
    opacity: 1;
    pointer-events: all;
  }
`;
document.head.appendChild(lightboxStyles);