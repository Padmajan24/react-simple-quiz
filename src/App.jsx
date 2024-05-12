

import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },{
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },{
      text: "What is the capital of France?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Paris", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Nice", isCorrect: false },
      ],
    },{
      text: "What is the capital of Germany?",
      options: [
        { id: 0, text: "Lyon", isCorrect: false },
        { id: 1, text: "Berlin", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Alaska", isCorrect: false },
      ],
    },{
      text: "What is the capital of Japan?",
      options: [
        { id: 0, text: "Nice", isCorrect: false },
        { id: 1, text: "Tokyo", isCorrect: true },
        { id: 2, text: "Yokohama", isCorrect: false },
        { id: 3, text: "Hamburg", isCorrect: false },
      ],
    },{
      text: "What is the largest What is the capital of Brazil? ",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Brasília", isCorrect: true },
        { id: 2, text: "Tokyo", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "What is the largest What is the capital of India?",
      options: [
        { id: 0, text: "GOA", isCorrect: false },
        { id: 1, text: "New Delhi ", isCorrect: true },
        { id: 2, text: "Kolkata", isCorrect: false },
        { id: 3, text: "Mumbai", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];



  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1> Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
