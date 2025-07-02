import React, { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const startCelebration = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 80, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 80, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
};

const PuzzleGame = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    startCelebration();
    // يمكنك هنا إضافة أي منطق آخر لتشغيل اللعبة
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4 relative">
      <button
        className="absolute top-4 left-4 bg-blue-800 text-white py-2 px-4 rounded-full border-2 border-white flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft /> الرئيسية
      </button>

      <h1 className="text-2xl font-bold text-blue-900 mb-6">Puzzle Game 🧩</h1>

      <a href="/puzzle-game.html" rel="noopener noreferrer">
        <button onClick={handlePlay}>شغل اللعبة</button>
      </a>
    </div>
  );
};

export default PuzzleGame;
