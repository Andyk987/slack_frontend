import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import slackLogo from "../../../images/slack_logo.svg";
import { ExecutionButton } from "../../buttons/executin-button";
import { ProductMenu } from "../../product-menu";

interface HeaderProps {
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const menuLists = [
    { name: "Enterprise", link: "/enterprise" },
    {
      name: "요금",
      link: "/price",
      className: "text-base font-bold leading-6",
    },
  ];
  const [menuState, setMenuState] = useState(false);
  const toogleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <header className="h-20">
      <div className="px-5vh xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 flex flex-row justify-between my-0 mx-auto h-full">
        <div className="flex items-center w-32">
          <Link to="/">
            <img src={slackLogo} alt="slack-logo" className="w-24" />
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center">
          <ul className="flex flex-1">
            <li
              className="px-2.5 py-4 cursor-pointer"
              onMouseEnter={toogleMenu}
              onMouseLeave={toogleMenu}
            >
              <span className="text-base font-bold leading-6">
                제품
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`arrow ease-cubic duration-300 transform ${
                    menuState ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
              <ProductMenu isOnMouse={menuState} />
            </li>
            {menuLists.map((list, index) => (
              <li key={index} className="px-2.5 py-4">
                <Link to={list.link} className={list.className}>
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex p-4 pr-0">
            <Link
              to="/contact"
              className="px-4 py-3 text-sm font-bold leading-snug text-purple-deep shadow-slight rounded transition-box ease-cubic duration-500 hover:shadow-thick"
            >
              영업 팀과 대화하기
            </Link>
            {isLoggedIn ? (
              <ExecutionButton />
            ) : (
              <Link
                to="/login"
                className="ml-5 px-4 py-3 text-sm font-bold leading-snug text-white bg-purple-deep rounded transition-box ease-cubic duration-500 hover:bg-purple-more_deep"
              >
                로그인
              </Link>
            )}
          </div>
        </nav>
        <button className="md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};
