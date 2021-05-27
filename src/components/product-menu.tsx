import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {
  isOnMouse: boolean;
}

export const ProductMenu: React.FC<MenuProps> = ({ isOnMouse }) => {
  const MenuLists = [
    { name: "기능", link: "/features" },
    { name: "채널", link: "/channels" },
    { name: "통합", link: "/integrations" },
    { name: "보안", link: "/security" },
    { name: "Slack Connect", link: "/connect" },
    { name: "솔루션", link: "/solutions" },
    { name: "고객", link: "/customers" },
  ];

  return (
    <ul
      className={`absolute bg-white -mx-2 py-2 w-52 shadow-md border border-solid border-gray-50 rounded-lg ${
        isOnMouse ? "block" : "hidden"
      }`}
    >
      {MenuLists.map((list, index) => (
        <li
          key={index}
          className={`flex font-normal leading-normal mb-1 ${
            index === 0 ? "mt-0" : "mt-1"
          }`}
        >
          <Link
            to={list.link}
            className="flex flex-col justify-center px-4 w-full h-7 text-sm hover:bg-blue-deep hover:text-white"
          >
            {list.name}
          </Link>
        </li>
      ))}
      <li className="flex mt-1 pt-2 border-t">
        <Link
          to="/download"
          className="flex flex-col justify-center px-4 w-full h-7 text-sm hover:bg-blue-deep hover:text-white"
        >
          Slack 다운로드
        </Link>
      </li>
    </ul>
  );
};
