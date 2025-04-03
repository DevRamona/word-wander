const API_BASE_URL = 'http://localhost:3000';

class UserManager {
    constructor() {
        this.currentUser = null;
        this.loadUserFromStorage();
    }

    loadUserFromStorage() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.updateUI();
        }
    }

    async login(email, password) {
        try {
            const response = await $.get(`${API_BASE_URL}/users?email=${email}`);
            if (response.length > 0) {
                this.currentUser = response[0];
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                this.updateUI();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }

    updateUI() {
        if (this.currentUser) {
            $('.user-name').text(this.currentUser.username);
            $('.user-email').text(this.currentUser.email);
            this.loadUserPreferences();
        }
    }

    loadUserPreferences() {
        if (this.currentUser?.preferences) {
            $('body').attr('data-theme', this.currentUser.preferences.theme);
            $('#languageSelect').val(this.currentUser.preferences.language);
        }
    }

    async updatePreferences(preferences) {
        try {
            const response = await $.ajax({
                url: `${API_BASE_URL}/users/${this.currentUser.id}`,
                method: 'PATCH',
                data: JSON.stringify({ preferences }),
                contentType: 'application/json'
            });
            this.currentUser = response;
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.loadUserPreferences();
        } catch (error) {
            console.error('Failed to update preferences:', error);
        }
    }
}

class CourseManager {
    async loadCourses() {
        try {
            const courses = await $.get(`${API_BASE_URL}/courses`);
            this.displayCourses(courses);
        } catch (error) {
            console.error('Failed to load courses:', error);
        }
    }

    displayCourses(courses) {
        const courseContainer = $('.courses-container');
        courseContainer.empty();

        courses.forEach(course => {
            const courseElement = `
                <div class="course-card">
                    <h3>${course.title}</h3>
                    <div class="course-info">
                        <span>Level: ${course.level}</span>
                        <span>Lessons: ${course.lessons}</span>
                        <span>Students: ${course.students}</span>
                    </div>
                    <div class="course-progress">
                        <div class="progress-bar" style="width: ${course.points}%"></div>
                    </div>
                    <button class="start-course" data-course-id="${course.id}">Start Course</button>
                </div>
            `;
            courseContainer.append(courseElement);
        });
    }
}

class LessonManager {
    async loadLesson(lessonId) {
        try {
            const lesson = await $.get(`${API_BASE_URL}/lessons/${lessonId}`);
            this.displayLesson(lesson);
        } catch (error) {
            console.error('Failed to load lesson:', error);
        }
    }

    displayLesson(lesson) {
        const lessonContainer = $('.lesson-container');
        lessonContainer.empty();

        lesson.content.forEach((item, index) => {
            if (item.type === 'question') {
                const questionElement = `
                    <div class="question-card">
                        <h4>${item.text}</h4>
                        <div class="options">
                            ${item.options.map(option => `
                                <button class="option" data-value="${option}">${option}</button>
                            `).join('')}
                        </div>
                    </div>
                `;
                lessonContainer.append(questionElement);
            }
        });
    }

    async submitAnswer(lessonId, answer) {
        try {
            const response = await $.ajax({
                url: `${API_BASE_URL}/progress`,
                method: 'POST',
                data: JSON.stringify({
                    userId: userManager.currentUser.id,
                    lessonId,
                    answer,
                    timestamp: new Date().toISOString()
                }),
                contentType: 'application/json'
            });
            return response;
        } catch (error) {
            console.error('Failed to submit answer:', error);
        }
    }
}

const userManager = new UserManager();
const courseManager = new CourseManager();
const lessonManager = new LessonManager();

$(document).ready(() => {
    $('#loginForm').on('submit', async (e) => {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        const success = await userManager.login(email, password);
        if (success) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });

    $('.logout-btn').on('click', () => {
        userManager.logout();
    });

    $('#themeToggle').on('change', function() {
        const theme = $(this).prop('checked') ? 'dark' : 'light';
        userManager.updatePreferences({ ...userManager.currentUser.preferences, theme });
    });

    $('#languageSelect').on('change', function() {
        const language = $(this).val();
        userManager.updatePreferences({ ...userManager.currentUser.preferences, language });
    });

    $(document).on('click', '.start-course', function() {
        const courseId = $(this).data('course-id');
        window.location.href = `lesson.html?courseId=${courseId}`;
    });

    $(document).on('click', '.option', async function() {
        const answer = $(this).data('value');
        const lessonId = new URLSearchParams(window.location.search).get('lessonId');
        await lessonManager.submitAnswer(lessonId, answer);
    });

    if ($('.courses-container').length) {
        courseManager.loadCourses();
    }

    if ($('.lesson-container').length) {
        const lessonId = new URLSearchParams(window.location.search).get('lessonId');
        if (lessonId) {
            lessonManager.loadLesson(lessonId);
        }
    }
});