document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // Adjust the scroll distance as needed
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

const burger = document.getElementById('burger');
const nav = document.querySelector('header nav');
const icon = burger.querySelector('i');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');

  if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  }
});



