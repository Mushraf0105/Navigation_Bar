// ===================================================
// SELECT DOM ELEMENTS
// ===================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ===================================================
// TOGGLE MOBILE MENU & HAMBURGER ANIMATION
// ===================================================
hamburger.addEventListener('click', () => {
  // Toggle "active" class on both the button and the menu
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// ===================================================
// UPDATE ACTIVE LINK & CLOSE MENU ON CLICK
// ===================================================
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove "active" class from all links
    navLinks.forEach((item) => item.classList.remove('active'));

    // Add "active" class to the currently clicked link
    this.classList.add('active');

    // Close mobile menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===================================================
// CLOSE MENU WHEN CLICKING OUTSIDE THE NAVBAR
// ===================================================
document.addEventListener('click', (event) => {
  const isClickInsideNavbar = hamburger.contains(event.target) || navMenu.contains(event.target);

  if (!isClickInsideNavbar && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
