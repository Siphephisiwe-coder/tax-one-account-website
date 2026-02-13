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

// SLIDE-IN ANIMATIONS - About Section
const slideElements = document.querySelectorAll('.slide-left, .slide-right');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide-in');
    }
  });
}, {threshold: 0.2});

slideElements.forEach(el => slideObserver.observe(el));

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // === SERVICE NAVIGATION ===
  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceDetails = document.querySelectorAll(".service-detail");

  serviceLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      serviceLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Hide all service details
      serviceDetails.forEach(detail => detail.classList.remove("active"));

      // Show the clicked one
      const targetId = this.getAttribute("href").substring(1); // remove #
      const targetDetail = document.getElementById(targetId);
      if (targetDetail) {
        targetDetail.classList.add("active");
        targetDetail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // === FAQ ACCORDION ===
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;

      // Toggle answer visibility
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        this.classList.remove("open");
      } else {
        // Close all other FAQs in the same service
        const parent = this.closest(".faqs");
        parent.querySelectorAll(".faq-answer").forEach(ans => {
          ans.style.maxHeight = null;
        });
        parent.querySelectorAll(".faq-question").forEach(q => {
          q.classList.remove("open");
        });

        // Open current
        answer.style.maxHeight = answer.scrollHeight + "px";
        this.classList.add("open");
      }
    });
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
