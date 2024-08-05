
//animeions
  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll('.hidden');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add(entry.target.dataset.animation);
          observer.unobserve(entry.target);
        }
      });
    });
  
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
  });
  





