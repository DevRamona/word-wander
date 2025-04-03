document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    const userEmail = localStorage.getItem('userEmail');
    const welcomeMessage = document.querySelector('.welcome-text h2');
    if (welcomeMessage) {
        const userName = userEmail.split('@')[0]; 
        welcomeMessage.textContent = `Hi ${userName}, Good ${getTimeOfDay()}!`;
    }
});

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}

document.querySelector('.logout-button')?.addEventListener('click', logout);
