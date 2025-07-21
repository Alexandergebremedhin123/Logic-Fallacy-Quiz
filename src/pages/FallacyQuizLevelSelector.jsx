import React from 'react'
import "../styles/Quiz.css";
import { useNavigate } from "react-router-dom";


export default function FallacyQuizLevelSelector() {
  const navigate = useNavigate();
  return (
    <div className="quiz-wrapper">
       <h1 className="quiz-title">
         Select a Level – Which Fallacy type is it?
       </h1>

       <div className="level-selector">
         {[...Array(10)].map((_, index) => ( 
         <button key={index} className="level-btn" onClick={() => navigate(`/quiz/FallacyQuiz/${index+1}`)}> 
            Level {index+1}
          </button>
        ))} 
      </div>
     </div>
  )
}
