document.addEventListener("DOMContentLoaded", () => {
    const favCount = document.getElementById("heart-count");
    const heartIcons = document.querySelectorAll(".fa-heart");
  
    heartIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        let current = parseInt(favCount.textContent, 10);
        favCount.textContent = current + 1;
      });
    });
  });