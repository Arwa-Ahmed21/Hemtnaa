import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGamepad, FaBook, FaPuzzlePiece, FaMusic } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-pink-200 to-blue-200 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">
          مرحبًا بكم في همتنا
        </h1>
        <p className="text-lg text-gray-600">
          منصة مصممة خصيصًا لأطفالنا ذوي الاحتياجات الخاصة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full ">
        {/* قسم الألعاب */}
        <div
          onClick={() => handleNavigate("/container-game")}
          className="bg-white rounded-xl shadow-md hover:-translate-y-1 p-4 text-center cursor-pointer hover:bg-pink-50 transition"
        >
          <FaGamepad className="text-4xl text-indigo-900 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-1">
            الألعاب التعليمية
          </h3>
          <p className="text-gray-600">
            انقر هنا للوصول إلى مجموعة الألعاب التعليمية الممتعة
          </p>
        </div>

        {/* قسم القصص */}
        <div
          onClick={() => handleNavigate("/stories")}
          className="bg-white rounded-xl shadow-md p-4 text-center cursor-pointer hover:-translate-y-1 hover:bg-pink-50 transition"
        >
          <FaBook className="text-4xl text-indigo-900 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-1">
            القصص التفاعلية
          </h3>
          <p className="text-gray-600">
            استمتع بمجموعة من القصص المصورة التفاعلية
          </p>
        </div>

        {/* قسم البازل */}
        <a
          href="/puzzle-game.html"
          rel="noopener noreferrer"
          className="bg-white hover:-translate-y-1 rounded-xl shadow-md p-4 text-center cursor-pointer hover:bg-pink-50 transition"
        >
          <div
          // onClick={() => handleNavigate("/puzzle-game.html")}
          // className="bg-white rounded-xl shadow-md p-4 text-center cursor-pointer hover:bg-pink-50 transition"
          >
            <FaPuzzlePiece className="text-4xl text-indigo-900 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-indigo-900 mb-1">
              التحدي الذهنى
            </h3>
            <p className="text-gray-600">
              تمارين وألغاز لتنمية المهارات الذهنية
            </p>
          </div>
        </a>
        {/* قسم السمعيات */}
        <div
          onClick={() => handleNavigate("/audiology")}
          className="bg-white rounded-xl shadow-md p-4 hover:-translate-y-1 text-center cursor-pointer hover:bg-pink-50 transition"
        >
          <FaMusic className="text-4xl text-indigo-900 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-1">السمعيات</h3>
          <p className="text-gray-500">مجموعة من الصوتيات التعليمية الممتعة</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
