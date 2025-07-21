import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <h1 className="home-title"> Logic & Fallacy Trainer</h1>
      <p className="home-subtitle">
        Sharpen your mind. Master fallacies. Become a better thinker.
      </p>
      <div className="home-buttons">
        <button className="home-btn" onClick={() => navigate("/notes")}>
        <img src='./pencil.png'  alt="icon"width="14" height="14"  style={{ marginRight: '6px' }}/> Read Notes
          </button>
        <button className="home-btn" onClick={() => navigate("/quiz")}>
          <img src='./quiz.png'  alt="icon"width="14" height="14"  style={{ marginRight: '6px' }}/>Start Quiz
        </button>
      </div>
    </div>
  );
}