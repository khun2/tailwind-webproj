function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateCountdown() {
    const targetDate = new Date(new Date().getFullYear(), 5, 18); // June is month 5 (0-based index)
    const now = new Date();
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').style.setProperty('--value', days);
    document.getElementById('hours').style.setProperty('--value', hours);
    document.getElementById('min').style.setProperty('--value', minutes);
    document.getElementById('sec').style.setProperty('--value', seconds);
}

setInterval(updateCountdown, 1000); // Update countdown every second
updateCountdown(); // Initial call to set the countdown immediately

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
        document.querySelector(`input[value="${savedTheme}"]`).checked = true;
    }
});