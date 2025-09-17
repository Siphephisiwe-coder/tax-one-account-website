var swiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade", // smooth fading between images
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  // NAV TOGGLE + SCROLL BEHAVIOR
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  // Toggle mobile nav
  navToggle.addEventListener('click', function () {
    const isOpen = header.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when clicking a nav link (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (header.classList.contains('open')) {
        header.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Add scrolled class after passing 60px
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Optional: smooth scroll for internal links (modern browsers)
  document.documentElement.style.scrollBehavior = 'smooth';
});

// Sidebar service switching
document.querySelectorAll(".service-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // remove active from all
    document.querySelectorAll(".service-link").forEach(l => l.classList.remove("active"));
    document.querySelectorAll(".service-detail").forEach(s => s.classList.remove("active"));

    // add active to clicked link and matching section
    link.classList.add("active");
    const target = document.querySelector(link.getAttribute("href"));
    target.classList.add("active");
  });
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const faq = btn.parentElement;
    faq.classList.toggle("open");
  });
});

//form submition
const form = document.getElementById('quoteForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default page refresh

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  // Opens the user's default email client with prefilled content
  window.location.href = `mailto:info@oneaccountconsulting.com?subject=Quote Request - ${service}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
});
