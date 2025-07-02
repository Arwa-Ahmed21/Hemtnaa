import React from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const storiesData = [
  {
    img: "/img/story-1.png",
    title: "قصة بر الوالدين",
    desc: "رضا ماما وبابا طريق للنجاح",
    video: "/stories/بر الوالدين.mp4",
  },
  {
    img: "/img/story-2.png",
    title: "قصة أصحاب الفيل",
    desc: "أبرهة الحبشي والكعبة",
    video: "/stories/قصة أصحاب الفيل.mp4",
  },
  {
    img: "/img/story-3.png",
    title: "قصة سيدنا ابراهيم",
    desc: "حكاية النمرود ونبي الله إبراهيم",
    video: "/stories/قصة النبي إبراهيم عليه السلام.mp4",
  },
  {
    img: "/img/story-4.png",
    title: "قصة سيدنا يوسف",
    desc: "من ظلمات البئر إلى النور",
    video: "/stories/قصة النبي يوسف عليه السلام.mp4",
  },
  {
    img: "/img/story-5.png",
    title: "قصة سيدنا يونس",
    desc: "ماذا حدث في بطن الحوت؟",
    video: "/stories/قصة النبي يونس عليه السلام.mp4",
  },
  {
    img: "/img/story-6.png",
    title: "قصة سيدنا نوح",
    desc: "سفينة نوح عليه السلام",
    video: "/stories/قصة نبي الله نوح عليه السلام.mp4",
  },
  {
    img: "/img/story-7.png",
    title: "حدوتة الفيل فلفول",
    desc: "تفتكر إيه اللي حصل للفيل ؟",
    video: "/stories/حدوتة الفيل فلفول _ حواديت قبل النوم للأطفال.mp4",
  },
  {
    img: "/img/story-8.png",
    title: "حدوتة فئران القلعة",
    desc: "رضا ماما وبابا طريق للنجاح",
    video: "/stories/توتة توتة - ماما ميرا - 008 - فئران القلعة.mp4",
  },
  {
    img: "/img/story-9.png",
    title: "قصة أرنوب المهمل",
    desc: "درس أرنوب المهمل",
    video:
      "/stories/قصص أطفال - قصص قبل النوم - قصة أرنوب المهمل - رسوم متحركة.mp4",
  },
];

const Stories = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <button
        onClick={handleBack}
        className="fixed top-5 left-5 bg-blue-900 text-white border-2 border-white px-6 py-2 rounded-full text-lg flex items-center gap-2 shadow-lg"
      >
        <i className="fas fa-arrow-left"></i> Home
      </button>

      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {storiesData.map((story, index) => (
          <div key={index} className="relative group">
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-56 object-cover rounded-xl shadow-md"
            />
            <div className="absolute top-3 left-3 bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
              <i className="fa-solid fa-heart text-white text-sm"></i>
            </div>
            <div className="absolute inset-0 bg-indigo-900 bg-opacity-90 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-xl mb-2 border-b border-white pb-1">
                {story.title}
              </h3>
              <p className="text-gray-200 mb-4">{story.desc}</p>
              <a href={story.video} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-play text-blue-300 text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
