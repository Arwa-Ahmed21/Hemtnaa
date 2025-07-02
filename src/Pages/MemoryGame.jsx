import React, { useState } from "react";

export default function MemoryGame() {
  const animals = ["🦆", "🐶", "🐱", "🦁", "🐮", "🐸", "🐵", "🐧", "🐔", "🐢"];
  const food = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥝", "🌽"];
  const mix = [...animals, ...food];

  const [title, setTitle] = useState("اختر المستوى");
  const [subtitle, setSubtitle] = useState("ابدأ المغامرة حسب مستواك!");
  const [cards, setCards] = useState([]);
  const [gridCols, setGridCols] = useState(3);
  const [emojiSize, setEmojiSize] = useState("text-3xl");
  const [flipped, setFlipped] = useState([]);
  const [lock, setLock] = useState(false);

  const shuffle = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const startGame = (level) => {
    let gridSize, emojis, size;
    if (level === "easy") {
      gridSize = 3;
      emojis = shuffle([...animals].slice(0, 6));
      size = "text-3xl";
    } else if (level === "medium") {
      gridSize = 6;
      emojis = shuffle([...food].slice(0, 9));
      size = "text-2xl";
    } else {
      gridSize = 6;
      emojis = shuffle([...mix].slice(0, 12));
      size = "text-xl";
    }

    const newCards = shuffle([...emojis, ...emojis]).map((emoji, idx) => ({
      id: idx,
      emoji: emoji,
      flipped: false,
      matched: false,
    }));

    setGridCols(gridSize);
    setEmojiSize(size);
    setTitle("لعبة الذاكرة");
    setSubtitle("اضغط على الكروت لتكشف الأزواج المتشابهة!");
    setCards(newCards);
    setFlipped([]);
    setLock(false);
  };

  const flipCard = (card) => {
    if (lock || card.flipped || card.matched) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    const newFlipped = [...flipped, card];

    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLock(true);
      setTimeout(() => {
        const [first, second] = newFlipped;
        if (first.emoji !== second.emoji) {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, flipped: false }
                : c
            )
          );
        } else {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, matched: true }
                : c
            )
          );
        }
        setFlipped([]);
        setLock(false);
      }, 800);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-pink-200 p-5"
    >
      <div className="w-full max-w-4xl bg-gradient-to-br from-gray-100 to-blue-100 rounded-3xl shadow-2xl overflow-hidden">
        <div
          className="bg-[#003479] text-white py-6 px-4 flex flex-col items-center justify-center"
          style={{ minHeight: "140px" }}
        >
          <h1 className="text-3xl mb-2">{title}</h1>
          <p className="text-lg">{subtitle}</p>
        </div>
        <div className="p-6 flex flex-col items-center">
          {cards.length === 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() => startGame("easy")}
                className="px-6 py-2 rounded-full bg-[#003479] text-white font-bold hover:-translate-y-1 transition"
              >
                سهل
              </button>
              <button
                onClick={() => startGame("medium")}
                className="px-6 py-2 rounded-full bg-[#0069d9] text-white font-bold hover:-translate-y-1 transition"
              >
                متوسط
              </button>
              <button
                onClick={() => startGame("hard")}
                className="px-6 py-2 rounded-full bg-[#7db1ff] text-white font-bold hover:-translate-y-1 transition"
              >
                صعب
              </button>
            </div>
          )}

          {cards.length > 0 && (
            <div
              className={`grid gap-2`}
              style={{
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => flipCard(card)}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center cursor-pointer text-2xl md:text-3xl ${emojiSize} shadow`}
                  style={{
                    backgroundColor: card.matched ? "#d4edda" : "",
                  }}
                >
                  {card.flipped || card.matched ? card.emoji : "❓"}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}