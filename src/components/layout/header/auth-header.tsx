import { Link } from "react-router-dom";
import slackLogo from "../../../images/slack_logo.svg";

export const AuthHeader = () => {
  return (
    <header className="grid grid-cols-3 items-center w-full py-12">
      <div></div>
      <div className="text-center">
        <Link to="/">
          <img src={slackLogo} alt="logo" className="w-36" />
        </Link>
      </div>
    </header>
  );
};
