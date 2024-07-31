// darkMode.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const darkModeBtn = document.querySelector('.dark-mode-toggle');
    const moon = document.querySelector('nav .fa-moon');
    const sun = document.querySelector('nav .fa-sun');
    const darkModeText = document.querySelector('nav p span');

    // Check and apply the saved dark mode setting
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark-mode');
        moon.style.display = 'none';
        sun.style.display = 'inline';
        darkModeText.innerHTML = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        moon.style.display = 'inline';
        sun.style.display = 'none';
        darkModeText.innerHTML = 'Dark Mode';
    }

    // Toggle dark mode on button click
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                moon.style.display = 'none';
                darkModeText.innerHTML = 'Light Mode';
                sun.style.display = 'inline';
                localStorage.setItem('darkMode', 'true');
            } else {
                moon.style.display = 'inline';
                sun.style.display = 'none';
                darkModeText.innerHTML = 'Dark Mode';
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
});
