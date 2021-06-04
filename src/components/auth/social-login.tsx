import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Loadable from 'react-loadable';

library.add(fab);

interface SocialLoginProps {
  socialType: string;
}
export const SocialLogin: React.FC<SocialLoginProps> = ({ socialType }) => {


  return (
    <button className="flex items-center justify-center mb-4 w-full max-w-full h-11 border-2 rounded border-blue-lightning transition-all hover:shadow-loginForm">
    </button>
  );
};