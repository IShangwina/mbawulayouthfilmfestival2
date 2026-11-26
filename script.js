/* ===========================
    Navigation Menu Toggle
=========================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navmenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// ============================
// MOBILE NAVIGATION MENU
// ============================

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

    });

});

/* ===========================
    Countdown Timer
=========================== */


document.addEventListener("DOMContentLoaded", () => {

    const countdowns = document.querySelectorAll("[data-countdown]");

    countdowns.forEach((countdown) => {

        const targetDate = new Date(countdown.dataset.date).getTime();

        const daysElement = countdown.querySelector("[data-days]");
        const hoursElement = countdown.querySelector("[data-hours]");
        const minutesElement = countdown.querySelector("[data-minutes]");
        const secondsElement = countdown.querySelector("[data-seconds]");

        const statusElement = countdown.parentElement.querySelector("[data-status]");

        // Check whether the date is valid
        if (Number.isNaN(targetDate)) {
            statusElement.textContent = "Date to be announced.";
            return;
        }

        function updateCountdown() {

            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {

                daysElement.textContent = "00";
                hoursElement.textContent = "00";
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";

                statusElement.textContent = "The event has started!";

                clearInterval(timer);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            daysElement.textContent = String(days).padStart(2, "0");
            hoursElement.textContent = String(hours).padStart(2, "0");
            minutesElement.textContent = String(minutes).padStart(2, "0");
            secondsElement.textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();

        const timer = setInterval(updateCountdown, 1000);

    });

});


