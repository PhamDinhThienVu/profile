// theme.js

// Theme management functionality

class ThemeManager {
    constructor() {
        this.currentTheme = 'light'; // default theme
    }

    // Method to switch theme
    switchTheme(theme) {
        this.currentTheme = theme;
        document.body.className = theme; // Apply the theme to the body
    }

    // Method to get the current theme
    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Export the ThemeManager class
export default ThemeManager;
