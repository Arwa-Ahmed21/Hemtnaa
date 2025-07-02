import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function MatchingShapes() {
  const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"];
  const shapes = ["circle", "square", "triangle"];

  const [currentTarget, setCurrentTarget] = useState({});
  const [options, setOptions] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNewQuestion();
  }, []);

  // دالة الاحتفال بالكونفيتي
  const startCelebration = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 80, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 80, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const generateNewQuestion = () => {
    setFeedback("");

    const target = {
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setCurrentTarget(target);

    const optionsCount = Math.random() > 0.5 ? 3 : 4;
    const correctIndex = Math.floor(Math.random() * optionsCount);
    setCorrectAnswerIndex(correctIndex);

    const tempOptions = [];

    for (let i = 0; i < optionsCount; i++) {
      let shape, color;

      if (i === correctIndex) {
        shape = target.shape;
        color = target.color;
      } else {
        do {
          shape = shapes[Math.floor(Math.random() * shapes.length)];
          color = colors[Math.floor(Math.random() * colors.length)];
        } while (shape === target.shape && color === target.color);
      }

      tempOptions.push({ shape, color });
    }

    setOptions(tempOptions);
  };

  const checkAnswer = (index) => {
    if (index === correctAnswerIndex) {
      setFeedback("أحسنت! إجابة صحيحة");
      setScore(score + 1);
      startCelebration();
    } else {
      setFeedback("حاول مرة أخرى");
    }
  };

  const shapeStyle = (shape, color) => {
    if (shape === "triangle") {
      return {
        width: 0,
        height: 0,
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: `50px solid ${color}`,
        backgroundColor: "transparent",
      };
    } else {
      return {
        width: "50px",
        height: "50px",
        backgroundColor: color,
        borderRadius: shape === "circle" ? "50%" : "5px",
      };
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-5"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          لعبة الأشكال المطابقة
        </h1>
        <p className="mb-4">اختر الشكل الذي يشبه الشكل المطلوب</p>

        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 flex items-center justify-center border-4 border-dashed border-blue-500 rounded-md">
            <div
              style={shapeStyle(currentTarget.shape, currentTarget.color)}
            ></div>
          </div>
        </div>

        <div className="text-lg font-bold mb-2">
          {feedback && (
            <span
              className={
                feedback.includes("أحسنت") ? "text-green-600" : "text-red-600"
              }
            >
              {feedback}
            </span>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer transform hover:scale-110 transition"
              onClick={() => checkAnswer(index)}
            >
              <div style={shapeStyle(option.shape, option.color)}></div>
            </div>
          ))}
        </div>

        <div className="text-gray-800 font-semibold mb-4">النقاط: {score}</div>

        <button
          onClick={generateNewQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          التالي
        </button>
      </div>
    </div>
  );
}