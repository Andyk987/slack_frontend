import Arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

export const CustomerShowcase = () => {
  return (
    <div className="px-5vh xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 grid row-start-1 row-end-3 col-start-1 col-end-3 mx-auto items-center">
      <article className="col-start-1 col-end-3 row-start-1 row-end-2 text-center mt-32">
        <h1 className="font-sans font-semibold leading-snug tracking-wider text-3xl mb-4">
          750,000개 이상의 회사에서 Slack을 통해 업무를 수행합니다
        </h1>
        <div className="inline-flex flex-row mx-auto mb-20">
          <Link to="/customer-stories" className="text-blue-middle">
            고객 스토리 모두 보기
            <img
              src={Arrow}
              alt="arrow"
              className="inline w-6 h-4 self-center ml-3"
            />
          </Link>
        </div>
      </article>
      <div className="flex flex-row max-w-full">
        <article className="col-start-1 col-end-2 row-start-2 row-end-3 w-6/12 h-400">
          <h1 className="text-3xl text-gray-600 mb-6">
            “저희 사업 안에선 정말 많은 요소들이 움직이고 있는데, 각 요소들은
            매우 긴밀하게 서로 연결되어 있습니다. 예를 들어 농장은 주방과
            연결되고, 화원도 주방과 연결됩니다. 또 주방은 모든 요소들과
            연결되어야 하죠.”
          </h1>
          <p className="font-semibold">Katina Connaughton</p>
          <p className="font-semibold">SingleThread 농부 책임자</p>
        </article>
        <article className="col-start-2 col-end-3 row-start-2 row-end-3 h-40"></article>
      </div>
    </div>
  );
};
