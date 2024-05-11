document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
  
    const projectButtons = document.querySelectorAll(".project-button");
    const workButtons = document.querySelectorAll(".work-button");
    const mobileNav = document.querySelector(".mobile-nav");
    const navLinks = document.querySelector("nav ul");
  
    projectButtons.forEach(button => {
      button.addEventListener("click", function() {
        console.log("Project button clicked");
        const projectContent = this.nextElementSibling;
        const projectText = projectContent.querySelector(".project-text");
        projectContent.classList.toggle("open");
        projectText.classList.toggle("open");
      });
    });
  
    workButtons.forEach(button => {
      button.addEventListener("click", function() {
        console.log("Work button clicked");
        const workContent = this.nextElementSibling;
        const workText = workContent.querySelector(".work-text");
        workContent.classList.toggle("open");
        workText.classList.toggle("open");
      });
    });
  
    mobileNav.addEventListener("click", function() {
      this.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  });