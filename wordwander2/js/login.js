// login.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    const loginForm = document.getElementById('loginForm');
    console.log('Login form found:', loginForm !== null);
    
    loginForm.addEventListener('submit', function(e) {
        console.log('Form submitted');
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Email entered:', email);
        console.log('Password entered:', password.length > 0 ? 'Yes' : 'No');

        // Mock login for testing
        if (email && password) {
            console.log('Attempting login...');
            try {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                console.log('Login successful, redirecting...');
                window.location.href = 'dashboard.html';
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred during login. Please try again.');
            }
        } else {
            console.log('Validation failed');
            alert('Please enter both email and password');
        }
    });
});