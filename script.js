document.addEventListener("DOMContentLoaded", () => {
    
    // Navbar Light Toggling
    
    const toggleModeButton = document.getElementById('toggle-light-btn');
    const htmlElement = document.documentElement;

    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        htmlElement.setAttribute('data-mode', savedMode);
        updateIcon(savedMode);
    }

    function toggleMode() {
        const currentMode = htmlElement.getAttribute('data-mode');
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-mode', newMode);
        localStorage.setItem('mode', newMode);
        updateIcon(newMode);
    }

    function updateIcon(mode) {
        const icon = toggleModeButton.querySelector('i');
        if (mode === 'dark') {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    }

    toggleModeButton.addEventListener('click', toggleMode);

    // Footer Email Copying 

    const emailElement = document.getElementById('email-text').innerText;
    const emailCopyButton = document.getElementById('copy-email-btn');

    emailCopyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(emailElement);
    });

});
