import React from "react";
import { Link } from "react-router-dom";

interface SectionButtonProps {
  buttonLink: string;
  buttonText: string;
  buttonPadding: string;
}

export const SectionButton: React.FC<SectionButtonProps> = ({
  buttonLink,
  buttonText,
  buttonPadding,
}) => {
  return (
    <Link
      to={buttonLink}
      className={`inline-block ${buttonPadding} py-4 text-sm font-bold leading-snug text-white bg-purple-deep rounded hover:bg-purple-more_deep`}
    >
      {buttonText}
    </Link>
  );
};
