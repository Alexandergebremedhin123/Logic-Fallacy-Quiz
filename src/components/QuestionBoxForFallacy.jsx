import React from "react";
import '../styles/QuestionBox.css';


export default function QuestionBoxForFallacy({ question, index, selectedAnswer, onSelect,submitted}) {
  const isCorrect = selectedAnswer === question.answer;
  const isCorrectAnswer = (choice) => choice === question.answer;
  const isWrongSelected = (choice) => submitted && selectedAnswer === choice && !isCorrect;
    return (
      <div className="question-box">
        <h3 className="question-text">{index + 1}. {question.question}</h3>
        <ul className="choices-list">
          {question.choices.map((choice, idx) => (
            <li key={idx}>
              <button
                className={`choice-btn 
                ${selectedAnswer === choice ? 'selected' : ''}
                ${isWrongSelected(choice) ? 'wrong' : ''}
                ${submitted && isCorrectAnswer(choice) ? 'correct' : ''}
            `}
                onClick={() =>!submitted && onSelect(choice)}
                disabled={submitted}
              >
                {choice}
                {submitted && isCorrectAnswer(choice) && (
                <span className="correct-answer-marker"> (Correct Answer)</span>
                  )}
                {isWrongSelected(choice) && (
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
  