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



//============================= Coin and Call History Functionality ================

const callHistoryList = document.getElementById("call-history-list");
const coinDisplay = document.getElementById("coin-count");
let coins = parseInt(coinDisplay.textContent, 10);

function updateCoins() {
  coinDisplay.textContent = coins;
}

function makeCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert(`দুঃখিত, আপনার পর্যাপ্ত কয়েন নেই ❌, 
কল করতে ন্যূনতম ২০ কয়েন লাগবে! 💰
ধন্যবাদ !`);
    return;
  }
  coins -= 20;
  updateCoins();

  const now = new Date();
  const timeString = now.toLocaleTimeString();
  alert(`📞 Calling number... ${serviceName} (${serviceNumber}) `);

  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-white p-2 rounded shadow";
  li.innerHTML = `
    <div>
      <span class="font-semibold block"> ${serviceName}</span>
      <span class="text-gray-500 block">${serviceNumber}</span>
    </div>
    <span class="text-gray-400 text-xs">${timeString}</span>
  `;
  callHistoryList.appendChild(li);
}

document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h3").innerText;
    const serviceNumber = card.querySelector(".text-3xl").innerText;
    makeCall(serviceName, serviceNumber);
  });
});


// =========================History List Clear Functionality==========
const clearBtn = document.getElementById('clear-history-btn');
const CallList = document.getElementById('call-history-list');

clearBtn.addEventListener('click', function(){
   
    CallList.innerHTML = " ";

});