import React from "react";
import "../styles/LevelSelector.css"

export default function LevelSelector() {
  return (
    
      <div className="level-selector">
        {[...Array(10)].map((_, index) => (
          <button key={index} className="level-btn">
            Level {index + 1}
          </button>
        ))}
      </div>
 
  );
}
