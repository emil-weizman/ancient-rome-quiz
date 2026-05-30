# ⚔️ Ancient Rome Quiz

A fun and interactive quiz game about Ancient Rome, built with React + TypeScript and Node.js.

_"What we do in life, echoes in eternity"_

## 🏛️ Tech Stack

**Frontend:** React 19, TypeScript, Vite, CSS Modules

**Backend:** Node.js, Express, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation & Running

**1. Clone the repository:**

```bash
git clone https://github.com/emil-weizman/ancient-rome-quiz.git
cd ancient-rome-quiz
```

**2. Start the Backend:**

```bash
cd backend
npm install
npm run dev
```

Server runs on http://localhost:3001

**3. Start the Frontend (in a new terminal):**

```bash
cd frontend
npm install
npm run dev
```

App runs on http://localhost:5173

**4. Run Tests:**

```bash
cd frontend
npm test
```

## 🎮 How to Play

1. Click **"Enter The Arena"** to start
2. Answer 5 random questions about Ancient Rome
3. Each question has a **20-second timer**
4. A **hint** appears after 10 seconds
5. Select your answer — it will be highlighted until time runs out
6. After time expires, the correct answer is shown for 2 seconds
7. See your final score and total time for correct answers

## 📁 Project Structure

```
ancient-rome-quiz/
├── backend/
│   └── src/
│       ├── data/
│       │   └── questions.ts       # 20 quiz questions
│       ├── routes/
│       │   └── quiz.ts            # GET /api/quiz endpoint
│       └── server.ts              # Express server setup
├── frontend/
│   └── src/
│       ├── api/
│       │   └── quizApi.ts         # API fetch function
│       ├── components/
│       │   ├── StartScreen/       # Welcome screen
│       │   ├── QuizScreen/        # Quiz game logic
│       │   ├── Question/          # Question with choices and timer
│       │   ├── Timer/             # Countdown timer
│       │   └── ResultScreen/      # Final score display
│       ├── hooks/
│       │   └── useQuizQuestions.ts # Custom hook for data fetching
│       ├── constants/
│       │   └── resultMessages.ts  # Result screen messages and quotes
│       ├── types/
│       │   └── index.ts           # TypeScript interfaces
│       └── App.tsx                # Main app component
└── README.md
```

## 🔌 API

### GET /api/quiz

Returns 5 random questions from a pool of 20.

**Response:**

```json
[
  {
    "question_id": 1,
    "question": "What famous Roman general...?",
    "hint": "He was also a renowned military commander.",
    "answer_index": 0,
    "choices": ["Julius Caesar", "Augustus"]
  }
]
```

## ✨ Features

- Randomized questions from a pool of 20 using Fisher-Yates shuffle
- 20-second countdown timer with color-changing progress bar
- Hints appear after 10 seconds
- Visual feedback for correct/incorrect answers
- Three different result screens based on score
- Score tracking with time measurement for correct answers
- Custom React hook for data fetching with loading and error states
- Gladiator-themed UI with AI-generated artwork and animations
- Responsive design for mobile and tablet
- CSS Modules for scoped styling
- Unit tests with Vitest and React Testing Library (14 tests)

## 🖼️ Visual Assets

The application uses original AI-generated artwork created specifically for this project. The images are designed to match the Ancient Rome theme and are not based on copyrighted movie stills, game assets, logos, or third-party images.
