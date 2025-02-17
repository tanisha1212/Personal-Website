function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const toggleBtn = document.querySelector('.toggle-btn');
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = 'Toggle Light Mode';
    } else { 
        toggleBtn.textContent = 'Toggle Dark Mode';
    }
}
