// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor: HTMLAnchorElement) => {
    anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!) as HTMLElement;
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle Function
function toggleDarkMode(): void {
    document.body.classList.toggle("dark-mode");
    const toggleBtn = document.querySelector('.toggle-btn') as HTMLButtonElement;
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = 'Toggle Light Mode';
    } else {
        toggleBtn.textContent = 'Toggle Dark Mode';
    }
}

// Hover Animation on Projects Links
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
