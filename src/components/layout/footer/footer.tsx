import { Link } from "react-router-dom";
import { TaskSection } from "../../main/task-section";
import SlackIcon from "../../../images/slack_icon.svg";
import { FooterLists } from "./footer-lists";
import { FooterContent } from "./footer-content";

export const Footer = () => {
  const Footer_Reason = {
    mainTitle: "SLACK을 사용해야 하는 이유",
    lists: [
      { title: "Slack vs 이메일", link: "/slack-vs-email" },
      { title: "채널", link: "/channels" },
      { title: "참여", link: "/engage-users" },
      { title: "확장성", link: "/scale" },
      { title: "데모 보기", link: "/demo" },
    ],
  };

  const Footer_Product = {
    mainTitle: "제품",
    lists: [
      { title: "기능", link: "/features" },
      { title: "통합", link: "/integrations" },
      { title: "Enterprise", link: "/enterpise" },
      { title: "솔루션", link: "/solutions" },
    ],
  };

  const Footer_Price = {
    mainTitle: "요금",
    lists: [
      { title: "플랜", link: "/plan" },
      { title: "유료 vs 무료", link: "/paid-vs-free" },
    ],
  };

  const Footer_Resource = {
    mainTitle: "리소스",
    lists: [
      { title: "파트너", link: "/partners" },
      { title: "개발자", link: "/api" },
      { title: "앱", link: "/apps" },
      { title: "블로그", link: "/blogs" },
      { title: "고객지원센터", link: "/help" },
      { title: "이벤트", link: "/events" },
    ],
  };

  const Footer_Company = {
    mainTitle: "회사",
    lists: [
      { title: "Slack 소개", link: "/about" },
      { title: "리더십", link: "/leaership" },
      { title: "IR", link: "/default-isx" },
      { title: "새소식", link: "/news" },
      { title: "미디어 키트", link: "/media-kit" },
      { title: "경력", link: "/careers" },
    ],
  };

  return (
    <div className="bg-white">
      <TaskSection />
      <div className="w-full">
        <div className="pt-14">
          <div className="flex justify-between xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 mx-auto my-0">
            <Link to="/">
              <img src={SlackIcon} alt="logo" className="w-12" />
            </Link>
            <nav className="w-5/6 mb-4">
              <ul className="grid grid-cols-5 mb-4">
                <FooterLists
                  mainTitle={Footer_Reason.mainTitle}
                  lists={Footer_Reason.lists}
                />
                <FooterLists
                  mainTitle={Footer_Product.mainTitle}
                  lists={Footer_Product.lists}
                />
                <FooterLists
                  mainTitle={Footer_Price.mainTitle}
                  lists={Footer_Price.lists}
                />
                <FooterLists
                  mainTitle={Footer_Resource.mainTitle}
                  lists={Footer_Resource.lists}
                />
                <FooterLists
                  mainTitle={Footer_Company.mainTitle}
                  lists={Footer_Company.lists}
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};
