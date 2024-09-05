const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Adjust the scroll threshold as needed
    navMenu.classList.add('scrolled');
  } else {
    navMenu.classList.remove('scrolled');
  }
});