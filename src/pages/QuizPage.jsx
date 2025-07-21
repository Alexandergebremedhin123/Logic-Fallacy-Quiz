import React from "react";
import "../styles/Quiz.css";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const navigate = useNavigate();

  return (
    <div className="quiz-wrapper">
      <h1 className="quiz-title">Choose a Challenge</h1>

      <div className="quiz-tabs">
        <button
          className="quiz-tab-btn"
          onClick={() => navigate("/quiz/IdentifyQuizPage")}
        >
          <img src='./Logical.png'  alt="icon"width="14" height="14"  style={{ marginRight: '8px' }}/>
           Is this statement logical or not?
        </button>
        <button
          className="quiz-tab-btn"
          onClick={() => navigate("/quiz/FallacyQuiz")}
        >
           <img src='./Fallacy.png'  alt="icon"width="14" height="14"  style={{ marginRight: '8px' }}/>
           Which fallacy is it?
        </button>
      </div>
    </div>
  );
}
