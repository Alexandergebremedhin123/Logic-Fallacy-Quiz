export function saveScore({ category, level, score, total }) {
    const key = "logic-trainer-scores";
    const oldScores = JSON.parse(localStorage.getItem(key)) || [];
  
    const newScore = {
      id: Date.now(), // Unique ID
      category,
      level,
      date: new Date().toLocaleDateString(),
      score: `${score}/${total}`,
    };
  
    const updatedScores = [newScore, ...oldScores];
    localStorage.setItem(key, JSON.stringify(updatedScores));
  }
  
  export function getScores() {
    const key = "logic-trainer-scores";
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  
  export function deleteScoreById(id) {
    const key = "logic-trainer-scores";
    const oldScores = JSON.parse(localStorage.getItem(key)) || [];
    const updatedScores = oldScores.filter((score) => score.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedScores));
  }
  
  export function clearAllScores() {
    const key = "logic-trainer-scores";
    localStorage.removeItem(key);
  }
  
  