export default function Games() {
  const handleNavigate = (url) => {
    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans">
      {/* شريط التنقل */}
      <nav className="bg-gray-100 py-4 px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavigate("/")}
          className="bg-[#003479] text-white border-4 border-white py-2 px-8 rounded-full text-xl"
        >
          Home <i className="fas fa-arrow-left"></i>
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">
            مرحباً بكم في منصة الألعاب التعليمية
          </h1>
          <p className="text-lg text-gray-600">
            منصة مصممة خصيصاً لأطفالنا ذوي الاحتياجات الخاصة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => handleNavigate("MemoryGame")}
            className="bg-blue-100 rounded-lg shadow-md p-5 text-center cursor-pointer hover:bg-blue-200 transition"
          >
            <i className="fas fa-gamepad text-3xl mb-4 text-blue-700"></i>
            <h3 className="text-xl font-semibold mb-2">لعبه الذاكره</h3>
            <p className="text-gray-700 text-sm">
              انقر هنا للوصول إلى اللعبه نبذه عن لعبه الذاكره انها لعبه تساعد
              وتحسن من ملاحظه الطفل وتقوى الذاكره
            </p>
          </div>

          <div
            onClick={() => handleNavigate("MatchingShapes")}
            className="bg-green-100 rounded-lg shadow-md p-5 text-center cursor-pointer hover:bg-green-200 transition"
          >
            <i className="fas fa-book text-3xl mb-4 text-green-700"></i>
            <h3 className="text-xl font-semibold mb-2">لعبة الأشكال المتطابقة </h3>
            <p className="text-gray-700 text-sm">
              انقر هنا للوصول إلى اللعبه نبذه عن لعبه الذكاء انها لعبه تساعد
              وتحسن التفكير عند الطفل وتقوى الملاحظه والعقل
            </p>
          </div>

          <div
            onClick={() => handleNavigate("puzzleGame")}
            className="bg-yellow-100 rounded-lg shadow-md p-5 text-center cursor-pointer hover:bg-yellow-200 transition"
          >
            <i className="fas fa-puzzle-piece text-3xl mb-4 text-yellow-700"></i>
            <h3 className="text-xl font-semibold mb-2">لعبة الالغاز</h3>
            <p className="text-gray-700 text-sm">
              انقر هنا للوصول إلى اللعبة نبذة عن لعبة الألغاز إنها لعبة تقوي
              الملاحظة وتقوي التفكير عند الطفل وتختبر معلومات الطفل
            </p>
          </div>
        </div>
      </div>

      {/* أصوات */}
      <audio
        className="hidden"
        id="clickSound"
        src="https://www.soundjay.com/buttons/sounds/button-09.mp3"
      ></audio>
      <audio
        className="hidden"
        id="navSound"
        src="https://www.soundjay.com/buttons/sounds/button-21.mp3"
      ></audio>
    </div>
  );
}
