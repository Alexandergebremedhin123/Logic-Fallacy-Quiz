import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByLevel } from "../utils/shuffleQuestions";
import fallacyCheckData from "../data/fallacy_check_questions_200.json";
import "../styles/Quiz.css";
import QuestionBoxForLogic from "../components/QuestionBoxForLogic";
export default function IdentifyQuizPage() {
  
  const { level } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const data = fallacyCheckData;

    const levelQuestions = getQuestionsByLevel(data,level); // You already have this util
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
   
    setScore(newScore);
    setShowScore(true);
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentAnswers({});
    const data = fallacyCheckData;
    setQuestions(getQuestionsByLevel(data,level));
  };

 
  
  const allAnswered = Object.keys(currentAnswers).length === 10;


  return (
    <div className="quiz-wrapper">
       <h2 className="quiz-title">Level {level} - { "is it Logical or Not?"}</h2>
       {questions.map((q, i) => (
            <QuestionBoxForLogic
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
