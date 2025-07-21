import React from "react";
import '../styles/QuestionBox.css';


export default function QuestionBoxForLogic({ question, index, selectedAnswer, onSelect,submitted }) {
  const isCorrect = selectedAnswer === question.answer;
  const isCorrectAnswer = (choices) => choices === question.answer;
  const isWrongSelected = (choices) => submitted && selectedAnswer === choices && !isCorrect;
    return (
      <div className="question-box">
        <h3 className="question-text">{index + 1}. {question.question}</h3>
        <ul className="choices-list">

          {question.choice.map((choices, idx) => (
            <li key={idx}>
              <button
               className={`choice-btn 
                ${selectedAnswer === choices ? 'selected' : ''}
                ${isWrongSelected(choices) ? 'wrong' : ''}
                ${submitted && isCorrectAnswer(choices) ? 'correct' : ''}
            `}
                onClick={() =>!submitted && onSelect(choices)}
                disabled={submitted}
              >
                {choices}
                {submitted && isCorrectAnswer(choices) && (
                <span className="correct-answer-marker"> (Correct Answer)</span>
                  )}
                {isWrongSelected(choices) && (
                <span className="wrong-answer-marker"> (Your Answer)</span>
                  )}
              </button>
            </li>
          ))}
        </ul>
        {submitted && !isCorrect && selectedAnswer && (
                <div className="feedback-incorrect">
                    The correct answer is: {question.answer}
                </div>
            )}
      </div>
    );
  }