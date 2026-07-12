// =========================
// Typing Animation
// =========================

const typing = document.getElementById("typing");

const words = [
  "Web Designer",
  "Graphic Designer",
  "Frontend Developer",
  "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  if (!typing) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

});


// =========================
// Active Navigation
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

  link.addEventListener("click", function () {

    links.forEach(item => item.classList.remove("active"));

    this.classList.add("active");

  });

});


// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll(".box,.card,.hero,.about,.service,.portfolio,.contact")
.forEach(el => observer.observe(el));


// =========================
// Contact Button
// =========================

function contactMe() {

  window.location.href = "contact.html";

}


// =========================
// WhatsApp Button
// =========================

function whatsapp() {

  window.open(
    "https://wa.me/919042276316",
    "_blank"
  );

}


// =========================
// Scroll To Top
// =========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

      topBtn.style.display = "block";

    } else {

      topBtn.style.display = "none";

    }

  });

  topBtn.onclick = function () {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  };

}


// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

  });

}