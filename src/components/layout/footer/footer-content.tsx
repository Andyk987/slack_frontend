import { Link } from "react-router-dom";
import { FooterLegal } from "./footer-legal";

export const FooterContent = () => {
  const ContentLists = [
    { title: "상태", link: "/status" },
    { title: "개인 정보 보호", link: "/privacy-policy" },
    { title: "약관", link: "legal" },
    { title: "문의하기", link: "contact" },
  ];

  return (
    <div className="w-full mb-0">
      <div className="flex xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 mx-auto my-0 border-t border-gray-300">
        <ul className="flex mb-4">
          {ContentLists.map((list, index) => (
            <li key={index} className="inline-block mr-4 py-8">
              <Link to={list.link} className="text-base font-bold leading-normal">{list.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <FooterLegal />
    </div>
  );
};
