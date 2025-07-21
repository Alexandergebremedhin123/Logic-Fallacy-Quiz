import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { getScores, deleteScoreById, clearAllScores } from "../utils/ScoreStorage";

export default function ScoresPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getScores());
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this history?")) {
        deleteScoreById(id);
        setScores(getScores());
      }
 
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all score history?")) {
      clearAllScores();
      setScores([]);
    }
}
    

  return (
    <div className="home-wrapper">
      <h1 className="home-title">📊 Score History</h1>
      {scores.length > 0 && (
        <button className="home-btn danger" onClick={handleClearAll}>
          🧹 Clear All History
        </button>
      )}
      <div className="scores-container">
      <div className="scores-grid">
      
        {scores.length === 0 ? (
                <div className="empty-state">
          <p className="p">No quiz attempts yet. Go test your logic!</p>
          </div>
        ) : (
          scores.map((s) => (
            <div className="score-card" key={s.id}>
              <h3>Level Category: {s.category}</h3>
              <p><strong>Level:</strong> {s.level}</p>
              <p><strong>Score:</strong> {s.score}</p>
              <p><strong>Date:</strong> {s.date}</p>
              <button className="delete-btn" onClick={() => handleDelete(s.id)}>
                  🗑 Delete
            </button>
            </div>
          ))
        )}
      </div>
      </div>
    </div>
  );
}
