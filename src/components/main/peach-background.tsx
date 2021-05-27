import React from "react";
import { SectionButton } from "../buttons/section-button";

interface PeachBackgroundProps {
  loggedIn: boolean;
}

export const PeachBackground: React.FC<PeachBackgroundProps> = ({
  loggedIn,
}) => {
  return (
    <div className="px-5vh xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 grid grid-cols-35-60 gap-5% mx-auto items-center">
      <article className="">
        <h1 className="font-sans text-4xl font-semibold leading-snug tracking-wide mb-4">
          {loggedIn
            ? "이는 고객님만을 위한 순간입니다. 작업에 혁신을 가져오도록 합시다."
            : "새 HQ에 오신것을 환영합니다."}
        </h1>
        <p className="text-gray-900 mb-4">
          {loggedIn
            ? "지난해가 증명한 것은 우리가 일하는 방식을 재정의할 수 있다는 것입니다. 보다 연결되고 포괄적이며 유연한 미래를 함께 만들어 봅시다."
            : "팀워크는 어렵고, 정신없으며, 복잡합니다. 그렇지만 업무를 진행하는 가장 좋은 방법입니다. 그래서 탄생한 것이 바로 사람들과 함께 일할 수 있는 공간인 Slack입니다."}
        </p>
        <div className="inline-block w-full overflow-visible">
          <SectionButton
            buttonLink={loggedIn ? "/reinvent-work" : "create-account"}
            buttonText={loggedIn ? "방법 알아보기" : "무료 체험"}
            buttonPadding={loggedIn ? "px-6" : "px-10"}
          />
        </div>
      </article>
      <article className="h-400"></article>
    </div>
  );
};
