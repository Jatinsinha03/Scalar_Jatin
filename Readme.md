# 🚀 LeetCode Question Helper - AI-Powered DSA Assistant

## 📌 Overview

The **LeetCode Question Helper** is an AI-powered teaching assistant that helps users **understand** and **solve** DSA (Data Structures & Algorithms) problems. The application enables users to:

- Submit a **LeetCode problem link** and ask doubts about it.
- Receive **guided explanations** with **hints** and **approach breakdowns** instead of direct answers.
- Engage in an interactive **chat-based UI** to explore concepts in an intuitive way.
- Get structured responses with **headings**, **subheadings**, **code snippets**, and **optimizations**.

Demo Link - [Link](https://leetcode-helper-frontend.onrender.com/)
---

## 📚 Example AI Prompts for LeetCode Helper

These prompts ensure users **develop their own problem-solving skills** rather than just receiving direct solutions.

### 🔍 Overview of the Problem
> "Before we dive into solving the problem, let's break it down step by step. What is the problem asking you to find? Can you rephrase it in your own words?"

💡 **Encourages users to internalize the problem rather than copying the question.**

---

### 🧠 Building Intuition
> "Let's relate this problem to a real-world scenario. Imagine you are at a store, and you need to find two products that add up to a certain price. How would you do it efficiently without checking every possible combination?"

💡 **Uses analogies to simplify abstract DSA concepts.**

---

### 🚀 Suggested Approaches
> "How would you approach this problem using brute force? Can you write a simple algorithm that checks every possible combination?"
>
> "Now, think about optimizing it. Is there a way to avoid unnecessary comparisons? Can you use a data structure like a hash table or a sorting technique to speed up the process?"

💡 **Encourages users to compare brute force vs optimized solutions.**

---

### 🛠️ Guidance for Implementation
> "Let's structure the solution step by step before writing code. What would be the input and output of your function? Can you define it in plain English?"
>
> "Now, let's write pseudocode before jumping into actual implementation. How would you translate your plan into simple logical steps?"

💡 **Encourages structured thinking before implementation.**

---

### ⚡ Tips for Optimization
> "Your current solution works, but can we improve it? What is the time complexity of your approach? Can you reduce it from O(n²) to O(n) or O(log n)?"
>
> "Are there alternative ways to solve this problem using different algorithms or data structures? Could sorting, dynamic programming, or greedy techniques help?"

💡 **Introduces big-O complexity analysis and alternative methods.**

---

### ⚠️ Common Pitfalls and Edge Cases
> "Many developers make mistakes when solving this type of problem. Can you identify what might go wrong in an incorrect implementation?"
>
> "What test cases would you use to verify your solution? Have you considered edge cases such as duplicate values, negative numbers, or large inputs?"

💡 **Develops debugging skills and encourages self-checking.**

---

## Run Locally


Clone the project

```bash
  git clone <repo_url>
```

Go to the project directory

```bash
  cd repo-name
```
Create a Virtual Environment

```bash

python -m venv venv  # Create a virtual environment
source venv/bin/activate  # Activate it (For Windows: venv\Scripts\activate)
pip install -r requirements.txt  # Install dependencies

```

Set Gemini API Key in config.py

```bash
  GEMINI_API_KEY = "your_api_key"
```

Start the app.py

```bash
  python3 app.py
```

Go to the frontend of the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the frontend server

```bash
  npm start
```

## Project Architure
<img width="676" alt="Screenshot 2025-03-02 at 12 21 11 PM" src="https://github.com/user-attachments/assets/87034adf-6544-4c5e-b538-93fc6c60c0a1" />

### 🖥️ **Backend (Flask)**
The backend is built using **Flask** and is responsible for handling user requests, processing AI responses, and interacting with Gemini AI.

| File | Description |
|------|------------|
| `app.py` | Main backend server that handles API requests. |
| `gpt_handler.py` | Communicates with **Google Gemini AI** to process and format responses. |
| `config.py` | Stores configurations like API keys securely. |
| `requirements.txt` | Lists Python dependencies needed for the backend. |

💡 **How It Works:**
1. The user submits a **LeetCode problem link** and a **question**.
2. The backend **processes the request** and forwards it to **Gemini AI**.
3. Gemini AI **returns a structured response** with explanations, hints, and optimizations.
4. The backend sends the AI response to the **React frontend**.

---

### 🌐 **Frontend (React)**
The frontend is built using **React.js** and provides an **interactive chat interface** for users to engage with the AI assistant.

| File | Description |
|------|------------|
| `App.js` | Main React application that connects frontend and backend. |
| `index.js` | Entry point for rendering the React app. |
| `components/QuestionInput.js` | Handles **user input** (LeetCode URL & question). |
| `components/ResponseDisplay.js` | Displays structured **AI-generated responses**. |
| `components/ResponseDisplay.css` | Styles the response section for **better readability**. |
| `package.json` | Manages frontend dependencies (React, Tailwind, etc.). |
| `public/` | Contains static assets for the frontend. |

💡 **How It Works:**
1. The user **enters a question** and optionally provides a **LeetCode link**.
2. The frontend **sends the request to the Flask backend**.
3. The backend processes it using **Gemini AI** and returns a structured response.
4. The response is **formatted and displayed** in a chat-like UI.

---

### 🚀 **Why This Architecture?**
✅ **Separation of Concerns:** The **frontend and backend are independent**, making it easier to maintain and scale.  
✅ **Scalability:** Can integrate **more AI features** without major changes.  
✅ **Modular Components:** The frontend is built with **React components** for reusability.  
✅ **AI-Powered Responses:** Uses **Google Gemini AI** for intelligent DSA guidance.  

This structure ensures that **LeetCode-Helper** is **efficient, scalable, and user-friendly**. 🚀🔥

# 🔥 How to Use the Application

1. **Enter a LeetCode problem link** in the input field.
2. **Describe your doubt** (e.g., *"How do I optimize this problem?"*).
3. **Click Submit** to receive an **AI-generated structured response**.
4. The **AI will guide you with hints** instead of giving direct answers.
5. **Modify your doubt** if you need further clarifications.
6. **Change the LeetCode problem link** anytime to ask about another question.

---

# 🤖 How the GPT Integration Works

- The **Gemini AI model** is used as the backend **AI assistant**.
- The AI is prompted with **structured guidance instructions** to:
  - ✅ **Encourage conceptual understanding**.
  - 🚀 **Avoid direct solutions but offer hints & intuition building**.
  - 💡 **Provide approaches, edge cases, and optimization techniques**.
- The AI **parses & returns structured responses** in a readable format.


## Images

![Screenshot 2025-03-02 at 12-16-10 LeetCode Question Helper](https://github.com/user-attachments/assets/d082a60a-9c91-4c6c-bf2a-60291f76b273)
![Screenshot 2025-03-02 at 12-16-29 LeetCode Question Helper](https://github.com/user-attachments/assets/d1ed7824-a82f-43c6-876f-51eb29075b57)
![Screenshot 2025-03-02 at 12-18-57 LeetCode Question Helper](https://github.com/user-attachments/assets/92ddee61-b6eb-450e-9cea-c47530ddb001)


