document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {
            image: 'https://images.unsplash.com/photo-1638988519380-da6ff0eb37c4?q=80&w=500&auto=format&fit=crop',
            title: 'Understand basic words in Kinyarwanda',
            lessons: 6,
            students: 198,
            level: 'Advanced',
            price: 'Free'
        },
        {
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=500&auto=format&fit=crop',
            title: 'Master English Conversation',
            lessons: 8,
            students: 245,
            level: 'Beginner',
            price: 'Free'
        },
        {
            image: 'https://images.unsplash.com/photo-1505902987837-9e40ec37e607?q=80&w=500&auto=format&fit=crop',
            title: 'French for Beginners',
            lessons: 10,
            students: 167,
            level: 'Beginner',
            price: 'Free'
        },
        {
            image: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?q=80&w=500&auto=format&fit=crop',
            title: 'Advanced English Grammar',
            lessons: 12,
            students: 320,
            level: 'Advanced',
            price: 'Free'
        },
        {
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500&auto=format&fit=crop',
            title: 'Business French',
            lessons: 8,
            students: 156,
            level: 'Intermediate',
            price: 'Free'
        },
        {
            image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=500&auto=format&fit=crop',
            title: 'Kinyarwanda Culture & Language',
            lessons: 15,
            students: 178,
            level: 'Intermediate',
            price: 'Free'
        }
    ];
    const icons = {
        lesson: `data:image/svg+xml;base64,${btoa(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `)}`,
        students: `data:image/svg+xml;base64,${btoa(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `)}`,
        level: `data:image/svg+xml;base64,${btoa(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `)}`,
        arrow: `data:image/svg+xml;base64,${btoa(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `)}`
    };

    // Render courses
    const courseGrid = document.getElementById('courseGrid');
    
    function renderCourses() {
        if (!courseGrid) {
            console.error('Course grid element not found!');
            return;
        }

        courseGrid.innerHTML = courses.map(course => `
            <article class="course-card">
                <div class="course-card__image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="course-card__badge">
                        <span class="course-price">${course.price}</span>
                    </div>
                </div>
                <div class="course-card__content">
                    <div class="course-card__meta">
                        <span class="meta-item">
                            <img src="${icons.lesson}" alt="Lessons">
                            ${course.lessons} Lessons
                        </span>
                        <span class="meta-item">
                            <img src="${icons.students}" alt="Students">
                            ${course.students} Students
                        </span>
                        <span class="meta-item">
                            <img src="${icons.level}" alt="Level">
                            ${course.level}
                        </span>
                    </div>
                    <h3 class="course-card__title">${course.title}</h3>
                    <div class="course-card__actions">
                        <button class="btn btn--course">
                            Start Course
                            <img src="${icons.arrow}" alt="Arrow" class="btn-icon">
                        </button>
                        <div class="course-card__likes">
                            <button class="like-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 14L7 13C3 9.5 1 7.5 1 5C1 3 2.5 1.5 4.5 1.5C5.5 1.5 6.5 2 7 2.5C7.5 2 8.5 1.5 9.5 1.5C11.5 1.5 13 3 13 5C13 7.5 11 9.5 7 13L8 14Z" stroke="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
    }
    renderCourses();
    // Mobile menu toggle
    console.log('Script loaded!');
    console.log('Courses array:', courses);

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) { // $breakpoint-md
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Popular courses data

    document.querySelectorAll('.course-card__image img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Add hover effects for course cards
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // Add "Load More" functionality
    let visibleCourses = 6;
    const loadMoreBtn = document.querySelector('.see-all-btn');

    loadMoreBtn?.addEventListener('click', function() {
        visibleCourses += 3;
        if (visibleCourses >= courses.length) {
            this.style.display = 'none';
        }
        renderCourses();
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .course-card, .hero__content').forEach(el => {
        observer.observe(el);
    });
});