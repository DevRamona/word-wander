# Word Wander

A comprehensive language learning web application that helps users enhance their vocabulary and language skills through interactive exercises, personalized learning paths, and progress tracking.

## Project Overview

Word Wander is a responsive web application designed to make language learning engaging and effective. The platform offers various courses, interactive vocabulary exercises, and personalized learning experiences.

## Features

### Courses
- Multiple language courses with structured learning paths
- Progress tracking and achievement system
- Interactive lessons with immediate feedback

### Vocabulary Building
- Flashcard system with spaced repetition
- Language-specific word collections
- Context-based learning examples

### User Experience
- Personalized dashboard showing progress and achievements
- Customizable user preferences and settings
- Responsive design for all devices

### Technical Features
- Dynamic content loading via AJAX
- Local storage for progress tracking
- User preference management with cookies
- Mock API integration for data management

## Project Structure

```
wordwander2/
├── css/                  # Stylesheets
├── images/               # Image assets
├── js/                   # JavaScript files
├── scss/                 # SCSS files for styling
├── about.html            # About page
├── contact.html          # Contact page
├── courses.html          # Courses listing page
├── dashboard.html        # User dashboard
├── db.json               # Mock database
├── index.html            # Home page
├── language-cards.html   # Vocabulary flashcards
├── lesson-complete.html  # Lesson completion page
├── level-test.html       # Language proficiency test
├── level-test-result.html # Test results page
├── login.html            # User authentication
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── settings.html         # User settings page
```

## Development Phases

### Phase 1: Backend Data Integration
- Developed a mock API using JSON Server to simulate backend functionality
- Implemented AJAX requests to fetch and display dynamic content
- Created data manipulation features for filtering and sorting course content

### Phase 2: Interactive Features
- Added interactive UI elements including custom forms, modals, and navigation
- Implemented dynamic content updates based on user interactions
- Developed form validation for user inputs

### Phase 3: User Personalization and Data Persistence
- Implemented cookie-based storage for user preferences and settings
- Used localStorage for tracking user progress across sessions
- Created functionality for users to save custom vocabulary lists and notes

### Phase 4: Accessibility and Responsiveness
- Ensured WCAG compliance for all interactive elements
- Implemented keyboard navigation and screen reader compatibility
- Optimized layout and functionality across mobile, tablet, and desktop views

## Getting Started

### Prerequisites
- Node.js and npm installed
- Basic understanding of HTML, CSS, and JavaScript

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/DevRamona/word-wander.git
   ```

2. Navigate to the project directory:
   ```
   cd word-wander/wordwander2
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the JSON server for the mock API:
   ```
   npx json-server --watch db.json --port 3000
   ```

5. Open `index.html` in your browser or use a local server:
   ```
   npx serve
   ```

## Usage

1. Create an account or log in through the login page
2. Complete the level test to determine your proficiency
3. Browse available courses and select one to begin
4. Track your progress through the dashboard
5. Use the vocabulary cards for practice
6. Adjust your preferences in the settings page

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped build and improve Word Wander
- Special thanks to language learning experts who provided guidance on effective learning methodologies
