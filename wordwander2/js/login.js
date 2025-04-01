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

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Log the full path
        console.log('Loading image:', img.src);
        
        img.onerror = function() {
            console.error('Failed to load:', img.src);
            // Try with adjusted path
            if (!img.src.includes('/images/')) {
                const newSrc = 'images/' + img.src.split('/').pop();
                console.log('Trying alternate path:', newSrc);
                img.src = newSrc;
            }
        };
        
        img.onload = function() {
            console.log('Successfully loaded:', img.src);
        };
    });

    const menuToggle = document.querySelector('.nav__toggle');
    const menuItems = document.querySelector('.nav__menu');
    
    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', () => {
            menuItems.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuItems.contains(e.target) && !menuToggle.contains(e.target)) {
                menuItems.classList.remove('active');
            }
        });
    }
});

const availableImages = {
    // Logo
    logo: 'images/logo.jpg',
    
    // Icons
    arrow: 'images/arrow_forward_ios.svg',
    user: 'images/Vector.png',
    lock: 'images/lock.png',
    location: 'images/location.svg',
    settings: 'images/settings.svg',
    profile: 'images/profile.svg',
    courses: 'images/courses.svg',
    logout: 'images/logout.svg',
    
    // Social Media
    facebook: 'images/Facebook.png',
    twitter: 'images/Twitter.png',
    linkedin: 'images/LinkedIn.png',
    instagram: 'images/instagram-line.svg',
    
    // Illustrations
    loginIllustration: 'images/Rectangle.jpg',
    welcome: 'images/welcome.svg',
    
    // Flags
    english: 'images/english.svg',
    french: 'images/french.svg',
    kinyarwanda: 'images/kinyarwanda.svg'
};
