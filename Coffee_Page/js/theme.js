document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('#theme-btn');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' 
            ? 'dark' 
            : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeBtn.classList.remove('fa-sun', 'fa-moon');
        themeBtn.classList.add(theme === 'light' ? 'fa-moon' : 'fa-sun');
    }
});