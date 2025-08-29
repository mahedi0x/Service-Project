//=============================   Copy Button Functionality ================
document.addEventListener("DOMContentLoaded", () => {
  const heartCount = document.getElementById("heart-count");
  const heartIcons = document.querySelectorAll(".fa-heart");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let current = parseInt(heartCount.textContent, 10);
      heartCount.textContent = current + 1;
    });
  });
});


//=============================   Copy Button Functionality ================
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const copyCount = document.getElementById("copy-count");
    let current = parseInt(copyCount.textContent, 10);
    copyCount.textContent = current + 1;
    const cardContainer = btn.closest(".card");
    const serviceNumber = cardContainer.querySelector(".text-3xl").innerText;
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`নাম্বার কপি হয়েছে: ${serviceNumber}`);
    });
  });
});

