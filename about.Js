  
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation, .slide-in-right,  .slide-in-left,   .slide-in-up, .slide-in-down ');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(element => observer.observe(element));
  });
  
  
    // document.addEventListener("DOMContentLoaded", function () {
    //   const scrollElements = document.querySelectorAll(".scroll-animation");
    //   const slideInLeftElements = document.querySelectorAll(".slide-in-left");
    //   const slideInRightElements = document.querySelectorAll(".slide-in-right");
    //   const slideInUpElements = document.querySelectorAll(".slide-in-up");
    //   const slideInDownElements = document.querySelectorAll(".slide-in-down");

    //   const elementInView = (el, dividend = 1) => {
    //     const elementTop = el.getBoundingClientRect().top;

    //     return (
    //       elementTop <=
    //       (window.innerHeight || document.documentElement.clientHeight) / dividend
    //     );
    //   };

    //   const displayScrollElement = (element) => {
    //     element.classList.add("visible");
    //   };

    //   const hideScrollElement = (element) => {
    //     element.classList.remove("visible");
    //   };

    //   const handleScrollAnimation = () => {
    //     scrollElements.forEach((el) => {
    //       if (elementInView(el, 1.25)) {
    //         displayScrollElement(el);
    //       } else {
    //         hideScrollElement(el);
    //       }
    //     });
    //     slideInLeftElements.forEach((el) => {
    //       if (elementInView(el, 1.25)) {
    //         displayScrollElement(el);
    //       } else {
    //         hideScrollElement(el);
    //       }
    //     });
    //     slideInRightElements.forEach((el) => {
    //       if (elementInView(el, 1.25)) {
    //         displayScrollElement(el);
    //       } else {
    //         hideScrollElement(el);
    //       }
    //     });
    //     slideInUpElements.forEach((el) => {
    //       if (elementInView(el, 1.25)) {
    //         displayScrollElement(el);
    //       } else {
    //         hideScrollElement(el);
    //       }
    //     });
    //     slideInDownElements.forEach((el) => {
    //       if (elementInView(el, 1.25)) {
    //         displayScrollElement(el);
    //       } else {
    //         hideScrollElement(el);
    //       }
    //     });
    //   };

    //   window.addEventListener("scroll", () => {
    //     handleScrollAnimation();
    //   });
    // });