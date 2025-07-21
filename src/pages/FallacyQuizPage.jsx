import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {saveScore} from '../utils/ScoreStorage'
import { getQuestionsByLevel } from "../utils/shuffleQuestions";
import QuestionBoxForFallacy from '../components/QuestionBoxForFallacy';

import fallacyTypeData from "../data/fallacy_type_questions_200.json";
import "../styles/Quiz.css";

export default function FallacyQuizPage() {
  
  const { level } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const data = fallacyTypeData;

    const levelQuestions = getQuestionsByLevel(data,level); 
    setQuestions(levelQuestions);
    setCurrentAnswers({});
    setShowScore(false);
    setScore(0);
  }, [ level]);

  const handleSelect = (index, answer) => {
    setCurrentAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, idx) => {
      
      if (currentAnswers[idx] === q.answer) newScore++;
     
    });
    saveScore({
      category: "Which Fallacy is it?",
      level,
      score: newScore,
      total: questions.length,
    });
    setScore(newScore);
    setShowScore(true);
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentAnswers({});
    const data = fallacyTypeData;
    setQuestions(getQuestionsByLevel(data,level));
  };


  const allAnswered = Object.keys(currentAnswers).length === 10;

  return (
   
      <div className="quiz-wrapper">
       <h2 className="quiz-title">Level {level} - { "Which Fallacy?"}</h2>
       {questions.map((q, i) => (
            <QuestionBoxForFallacy
              key={q.id}
              question={q}
              index={i}
              selectedAnswer={currentAnswers[i]}
              onSelect={(answer) => handleSelect(i, answer)}
              submitted={showScore}
            />
            
          ))}
      {!showScore ? (
     
     <button
     className="home-btn"
     onClick={handleSubmit}
    disabled={!allAnswered}
   >
     Submit
   </button>
       
      ) : (
        <div className="scoreboard">
        <h2>Your Score: {score} / {questions.length}</h2>
        <button className="home-btn" onClick={handleRestart}>
          🔄 Retry Quiz
        </button>
      </div>
      )}
     </div>
  );
}
