// Shared Theme Logic for Jezreel Ramos Portfolio
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Initialize theme from local storage or system settings
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

// Event listener for the theme toggle button
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// The words you want to cycle through
const words = ["Flutter Apps", "ML Models", "Cloud Solutions", "Multiplatform Projects", "AI Innovations", "Agents & Tools", "Open Source Contributions", "Tech Insights", "Mobile Experiences", "Cutting-Edge Tech"];
let currentWordIndex = 0;
const rotatingTextElement = document.getElementById('rotating-text');

// Only run if the element exists (prevents errors on other pages like apps.html)
if (rotatingTextElement) {
    // The interval duration (3000ms) MUST match the CSS animation duration (3s)
    setInterval(() => {
        // Move to the next word, loop back to 0 if at the end
        currentWordIndex = (currentWordIndex + 1) % words.length;
        
        // Wait just a tiny bit (2.8s) so the text changes WHILE it is invisible (opacity: 0)
        // based on the CSS keyframes, making the transition seamless.
        setTimeout(() => {
            rotatingTextElement.textContent = words[currentWordIndex];
        }, 2800); 

    }, 3000); 
}