document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
        return;
    }

    // Update user name in dashboard (assuming you store user info)
    const userEmail = localStorage.getItem('userEmail');
    const welcomeMessage = document.querySelector('.welcome-text h2');
    if (welcomeMessage) {
        const userName = userEmail.split('@')[0]; // Simple way to get name from email
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

// Add click handler to logout button (if you have one)
document.querySelector('.logout-button')?.addEventListener('click', logout);
