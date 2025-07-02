
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    video: "https://www.youtube.com/embed/rS9sIfMtAmE",
    question: "ما هو الرقم في الفيديو؟",
    options: [3, 1, 9, 2],
    correct: 1,
  },
  {
    video: "https://www.youtube.com/embed/n3xzvX4QZfg",
    question: "ما اسم الحيوان في الفيديو؟",
    options: ["قطة", "أسد", "كلب", "فيل"],
    correct: "كلب",
  },
  {
    video: "https://www.youtube.com/embed/OPrAI2pLWUA",
    question: "ما اللون الذي سمعته؟",
    options: ["أحمر", "أصفر", "أزرق", "أخضر"],
    correct: "أحمر",
  },
  {
    video: "https://www.youtube.com/embed/C-hzP3mOBGY",
    question: "ما هذا الصوت ؟",
    options: ["صاروخ", "سياره", "حيوان", "مطر"],
    correct: "مطر",
  },
  {
    video: "https://www.youtube.com/embed/QDGyPGLGQNw",
    question: "ما هذا الصوت ؟",
    options: ["كتاب", "زهرة", "عشب", "شجره"],
    correct: "شجره",
  },
];

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showWin, setShowWin] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentIndex < questions.length) return;

    const passingScore = Math.ceil(questions.length / 2);
    if (score >= passingScore) {
      setIsWinner(true);
      startCelebration();
    } else {
      setIsWinner(false);
    }
    setShowWin(true);
  }, [currentIndex, score]);

  const checkAnswer = (option) => {
    setDisabledOptions(true);
    setSelectedOption(option);

    if (option === currentQuestion.correct) {
      setScore((prev) => prev + 1);
      setTimeout(() => {
        goToNext();
      }, 2000);
    } else {
      setShowCorrectAnswer(true);
      setTimeout(() => {
        setShowCorrectAnswer(false);
        goToNext();
      }, 3000);
    }
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setDisabledOptions(false);
    setSelectedOption(null);
  };

  const restartGame = () => {
    window.location.reload();
  };

  const startCelebration = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 80, origin: { x: 0 } });
      confetti({ particleCount: 5, angle: 120, spread: 80, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  if (!currentQuestion && !showWin) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: "40px 10px",
        background: "linear-gradient(to left, #a4dbff, #ffa8d8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={handleBack}
        className="fixed top-5 left-5 bg-blue-900 text-white border-2 border-white px-6 py-2 rounded-full text-lg flex items-center gap-2 shadow-lg"
      >
        <i className="fas fa-arrow-left"></i> Home
      </button>
      {showWin && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px 25px",
              textAlign: "center",
              width: "320px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                color: isWinner ? "#ef69aa" : "#dc3545",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              {isWinner ? "🎉 مبروك يا أشطر كتكوت" : "😢 حاول مرة أخرى يا بطل"}
            </h2>
            <button
              onClick={restartGame}
              style={{
                padding: "10px 20px",
                border: "none",
                backgroundColor: "#0a4f84",
                color: "white",
                fontSize: "16px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              إعادة اللعب
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          padding: "30px 20px",
          width: "100%",
          maxWidth: "360px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          filter: showWin ? "blur(5px)" : "none",
          transition: "filter 0.5s ease",
        }}
      >
        <h2
          style={{ color: "#ef69aa", fontSize: "20px", marginBottom: "10px" }}
        >
          لعبة السمعيات
        </h2>
        <div
          style={{ color: "#7cb7e6", fontSize: "18px", marginBottom: "20px" }}
        >
          النقاط: {score}
        </div>

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          <iframe
            src={currentQuestion?.video}
            allowFullScreen
            style={{
              width: "100%",
              height: "190px",
              border: "none",
              borderRadius: "20px",
            }}
            title="Video Question"
          ></iframe>
        </div>

        <div
          style={{ color: "#7cb7e6", fontSize: "16px", marginBottom: "15px" }}
        >
          {currentQuestion?.question}
        </div>

        <div>
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => checkAnswer(option)}
              disabled={disabledOptions}
              style={{
                backgroundColor:
                  selectedOption === option
                    ? option === currentQuestion.correct
                      ? "#28a745"
                      : "#dc3545"
                    : "#0a4f84",
                color: "white",
                border: "none",
                padding: "12px",
                margin: "6px 0",
                borderRadius: "10px",
                width: "100%",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {showCorrectAnswer && (
          <div
            style={{ marginTop: "15px", color: "#dc3545", fontSize: "16px" }}
          >
            الإجابة الصحيحة: {currentQuestion.correct}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
