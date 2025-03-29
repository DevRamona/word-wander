(function() {
    const protectedPages = ['dashboard.html', 'profile.html', 'courses.html'];
    const currentPage = window.location.pathname.split('/').pop();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (protectedPages.includes(currentPage) && !isLoggedIn) {
        window.location.href = 'login.html';
    }
    
    if (currentPage === 'login.html' && isLoggedIn) {
        window.location.href = 'dashboard.html';
    }
})();
