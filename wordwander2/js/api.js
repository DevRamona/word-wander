const API_BASE_URL = "http://localhost:3000";

const api = {
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses`);
    return response.json();
  },

  getLevelTest: async (courseId) => {
    const response = await fetch(`${API_BASE_URL}/level-tests/${courseId}`);
    return response.json();
  },

  saveUserProgress: async (data) => {
    const response = await fetch(`${API_BASE_URL}/progress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
