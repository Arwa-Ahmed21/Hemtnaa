import React, { useState } from "react";

export default function Puzzle() {
  const puzzles = [
    {
      type: "text",
      question: "ما الشيء الذي له أوراق ولكنه ليس نباتًا؟",
      options: ["كتاب", "شجرة", "زهرة", "عشب"],
      answer: "كتاب",
      image: null,
    },
    {
      type: "image",
      question: "ما اسم هذا الحيوان؟",
      options: ["أسد", "فيل", "زرافة", "قرد"],
      answer: "فيل",
      image:
        "https://png.pngtree.com/background/20230605/original/pngtree-beautiful-african-elephant-drenched-in-water-watching-a-herd-picture-image_2875140.jpg",
    },
    {
      type: "text",
      question: "ما الشيء الذي كلما أخذت منه كبر؟",
      options: ["الحفرة", "الكعكة", "الكتاب", "البالون"],
      answer: "الحفرة",
      image: null,
    },
    {
      type: "image",
      question: "ما لون هذه الفاكهة؟",
      options: ["أحمر", "أصفر", "أخضر", "برتقالي"],
      answer: "أحمر",
      image:
        "https://thafd.bing.com/th/id/OIP.LAwREy8pTvwqP1S5rorN3QHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    },
    {
      type: "text",
      question: "ما هو الشيء الذي لا يمكن أن تراه، ولكنه يراك؟",
      options: ["الظل", "الضوء", "الصوت", "الهواء"],
      answer: "الظل",
      image: null,
    },
    {
      type: "image",
      question: "ما اسم الشكل في الصورة؟",
      options: ["شجرة", "نخلة", "وردة"],
      answer: "شجرة",
      image:
        "https://th.bing.com/th/id/R.c382fa0f555af2be15763eb934bffce0?rik=%2byxlwpAXIMfOEg&pid=ImgRaw&r=0",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  const puzzle = puzzles[index];

  const checkAnswer = (option) => {
    if (answered) return;
    setAnswered(true);

    if (option === puzzle.answer) {
      setFeedback("إجابة صحيحة! 🎉");
      setScore(score + 10);
    } else {
      setFeedback("إجابة خاطئة. حاول مرة أخرى.");
    }
  };

  const nextPuzzle = () => {
    setIndex((prev) => (prev + 1) % puzzles.length);
    setFeedback("");
    setAnswered(false);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-4"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">
          🎮 لعبة الألغاز
        </h1>
        <div className="text-blue-600 text-xl mb-4">النقاط: {score}</div>

        <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-lg p-6 mb-6 text-lg font-bold flex flex-col items-center justify-center min-h-[150px]">
          <p>{puzzle.question}</p>
          {puzzle.type === "image" && (
            <img
              src={puzzle.image}
              alt="puzzle"
              className="max-w-[200px] max-h-[200px] mt-4 rounded-lg"
            />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {puzzle.options.map((option) => (
            <button
              key={option}
              onClick={() => checkAnswer(option)}
              disabled={answered}
              className={`min-w-[120px] py-3 px-5 rounded-lg text-white text-lg transition ${
                answered && option === puzzle.answer
                  ? "bg-green-600"
                  : answered
                  ? "bg-red-500"
                  : "bg-blue-800 hover:bg-blue-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div
          className={`text-2xl mb-4 ${
            feedback.includes("صحيحة") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </div>

        {answered && (
          <button
            onClick={nextPuzzle}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            التالي
          </button>
        )}
      </div>
    </div>
  );
}
