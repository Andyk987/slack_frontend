import React from "react";
import { Link } from "react-router-dom";

interface FooterListsProps {
  mainTitle: string;
  lists: {
    title: string;
    link: string;
  }[];
}

export const FooterLists: React.FC<FooterListsProps> = ({
  mainTitle,
  lists,
}) => {
  return (
    <li className="">
      <span className="inline-flex items-start text-sm font-bold h-10">
        {mainTitle}
      </span>
      <ul className="block text-sm">
        {lists.map((list, index) => (
          <li key={index} className="">
            <Link
              to={list.link}
              className="inline-flex items-start flex- text-sm text-gray-light font-normal h-10 hover:text-blue-middle"
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
