// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const toggleBtn = document.querySelector('.toggle-btn');
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = 'Toggle Light Mode';
    } else {
        toggleBtn.textContent = 'Toggle Dark Mode';
    }
}
