import { Link } from "react-router-dom";

export const TaskSection = () => {
  return (
    <div
      className="flex items-center bg-purple-more_deep w-full h-96"
      style={{ clipPath: "ellipse(75% 100% at center top)" }}
    >
      <div className=" mx-auto my-0 ">
        <h1 className="text-white text-xl font-semibold tracking-widest mb-8">
          더 나은 업무 방식을 선택하세요
        </h1>
        <Link
          to="/login"
          className="inline-block mr-2 px-8 py-4 text-sm font-bold leading-snug bg-white rounded hover:shadow-lg"
        >
          무료 체험
        </Link>
        <Link
          to="/contact"
          className="inline-block px-6 py-4 text-white text-sm shadow-slight_white rounded transition-box ease-cubic duration-500 hover:shadow-thick_white"
        >
          영업팀과 대화하기
        </Link>
      </div>
    </div>
  );
};
