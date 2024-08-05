document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;

      // Add active class based on current page
      const links = headerContainer.querySelectorAll("nav ul li a");
      const currentPage = window.location.pathname.split("/").pop();

      links.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Ensure other scripts and styles are loaded after the header
      const script = document.createElement("script");
      script.src = "header.js"; // Ensure the path is correct
      document.body.appendChild(script);
      
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "header.css"; // Ensure the path is correct
      document.head.appendChild(style);
    })
    .catch(error => console.error("Error loading header:", error));
});
