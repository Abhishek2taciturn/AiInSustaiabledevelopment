// script.js

// Add event listeners to toggle project descriptions
const projectDivs = document.querySelectorAll('.project');

projectDivs.forEach((projectDiv) => {
  const projectTitle = projectDiv.querySelector('h3');
  const projectDetails = projectDiv.querySelector('.project-details');

  projectTitle.addEventListener('click', () => {
    projectDetails.classList.toggle('show');
  });
});
// script.js

// Highlight active link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll behavior
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 50, // Adjust for fixed navbar height
      behavior: 'smooth',
    });
  });
});
