import { Link } from "react-router-dom";

export const TeamChannels = () => {
  return (
    <div className="px-5vh xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 grid grid-cols-65-30 gap-5% mx-auto items-center">
      <article className="h-400"></article>
      <article>
        <h1 className="font-sans text-3xl font-semibold leading-snug tracking-wide mb-4">
          더 나은 커뮤니케이션 방법
        </h1>
        <p className="text-gray-900 mb-4">
          이메일과 달리 Slack에서는 대화 내용을 쉽게 파악 수 있습니다. 그리고
          단순히 대화하는 기능뿐만 아니라 전화를 하거나, 파일을 공유하거나,
          심지어 다른 앱과 연결하는 것도 가능합니다.
        </p>
        <div className="inline-block w-full overflow-visible">
          <Link
            to="/features"
            className="inline-block px-6 py-4 text-sm font-bold leading-snug text-purple-deep shadow-slight rounded transition-box ease-cubic duration-500 hover:shadow-thick"
          >
            모든 기능 보기
          </Link>
        </div>
      </article>
    </div>
  );
};
