document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option-btn');
    const feedbackMessage = document.querySelector('.feedback-message');
    const submitButton = document.querySelector('.nav-btn.next');

    submitButton.disabled = true;
    submitButton.style.opacity = '0.5';
    submitButton.style.cursor = 'not-allowed';

    options.forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.querySelector('.option-text').textContent === 'had cooked';
            
            this.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            options.forEach(opt => opt.classList.add('disabled'));
            
            feedbackMessage.classList.add(isCorrect ? 'correct' : 'incorrect');
            feedbackMessage.querySelector('h3').textContent = isCorrect ? 'Correct answer!' : 'Incorrect answer!';
            feedbackMessage.classList.add('show');
            
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
            submitButton.style.cursor = 'pointer';

            setTimeout(() => {
                feedbackMessage.classList.remove('show');
            }, 3000);
        });
    });

    submitButton.addEventListener('click', function() {
        window.location.href = 'lesson-complete.html';
    });
});