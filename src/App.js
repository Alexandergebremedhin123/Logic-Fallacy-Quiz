// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
