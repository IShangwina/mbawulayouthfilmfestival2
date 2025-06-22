const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const navbar = document.getElementById("navbar");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove("active");
      }
    });

    // Change nav on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

  const heroImage = document.querySelector('.hero-blur-image');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 300;

    const opacity = Math.max(0, 1 - scrollY / maxScroll);
    const blur = Math.min(20, scrollY / 10); // up to 20px blur

    heroImage.style.opacity = opacity;
    heroImage.style.filter = `blur(${blur}px)`;
  });  

  /* ===============
      COUNTDOWN
=============== */

// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date("2025-08-06T00:00:00"); // Replace with your actual date

function updateCountdown() {
  const now = new Date();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    countdownElement.innerText = "It's today!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdownElement.innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

const heroLogo = document.querySelector('.hero-logo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      heroLogo.classList.add('shrink');
    } else {
      heroLogo.classList.remove('shrink');
    }
  });

  /* ===========
      TRACKER
  ============= */
const timelineItems = document.querySelectorAll('.timeline-item');
    const cards = document.querySelectorAll('.program-card');

    window.addEventListener('scroll', () => {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          timelineItems[index].classList.add('active');
        }
      });
    });






// Open modal with dynamic content
function toggleDetails(event, content) {
  event.stopPropagation();
  const modal = document.getElementById("programModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <span class="modal-close" onclick="closeModal()">×</span>
    ${content}
  `;
  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  const modal = document.getElementById("programModal");
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside the modal-content
document.addEventListener("click", function (e) {
  const modal = document.getElementById("programModal");
  const content = document.querySelector(".modal-content");

  // Only close if modal is open AND click is outside the modal-content
  if (modal && modal.style.display === "flex" && !content.contains(e.target)) {
    closeModal();
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

