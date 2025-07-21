import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import QuizPage from "./pages/QuizPage";
import FallacyQuizPage from "./pages/FallacyQuizPage";
import FallacyQuizLevelSelector from "./pages/FallacyQuizLevelSelector";
import IdentifyQuizLevelSelector from "./pages/IdentifyQuizLevelSelector";
import IdentifyQuizPage from "./pages/IdentifyQuizPage";
import ScoresPage from "./pages/ScoresPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz/FallacyQuiz" element={<FallacyQuizLevelSelector />} />
      <Route path="/quiz/FallacyQuiz/:level" element={<FallacyQuizPage/>}/>
      <Route path="/quiz/IdentifyQuizPage" element={<IdentifyQuizLevelSelector />} />
      <Route path="/quiz/IdentifyQuizPage/:level" element={<IdentifyQuizPage/>}/>
      <Route path="/Scores" element={<ScoresPage/>}/>
    </Routes>
  );
}
