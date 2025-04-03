const UserPreferences = {
    setTheme: (theme) => {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
    },
    
    getTheme: () => {
        return localStorage.getItem('theme') || 'light';
    },
    
    saveProgress: (courseId, progress) => {
        const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
        userProgress[courseId] = progress;
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    },
    
    getProgress: (courseId) => {
        const userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
        return userProgress[courseId] || 0;
    },
    
    saveSettings: (settings) => {
        localStorage.setItem('userSettings', JSON.stringify(settings));
    },
    
    getSettings: () => {
        return JSON.parse(localStorage.getItem('userSettings') || '{}');
    }
};