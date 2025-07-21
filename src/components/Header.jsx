import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../pages/ScoresPage";
export default function Header() {
 const navigate=useNavigate();
  return (
    <header className="header-wrapper">
      <Link to="/" className="header-logo">
      <img src='./Logical.png'  alt="icon"width="28" height="28"  style={{ marginRight: '3px' }}/> 
      LogicQuiz
      </Link>
      <nav className="header-nav">
      
        <button className="home-btn" onClick={() => navigate("/Scores")}>
        <img src='./results.png'  alt="icon"width="14" height="14"  style={{ marginRight: '6px' }}/> 
        Scores
          </button>
       
      </nav>
    </header>
  );
}
