// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar buat nutupin menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function sendWhatsAppMessage() {
  const phoneNumber = "6281564964988"; // Nomor telepon tujuan
  const message = document.getElementById("message").value; // Ambil pesan dari input text
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

// script.js
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down - hide navbar
    navbar.style.top = "-80px"; // Adjust based on navbar height
  } else {
    // Scroll up - show navbar
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
