document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.querySelector('.btn-primary');
    
    continueButton.addEventListener('click', function() {
        window.location.href = 'level-test-result.html';
    });
});