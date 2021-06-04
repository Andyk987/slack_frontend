import { useEffect } from "react";
import { useHistory } from "react-router";
import { AuthHeader } from "../../components/layout/header/auth-header";
import { getScript } from "../../util/get-script";
import GoogleLogo from "../../images/google_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const CLIENT_ID =
  "129447111923-7e2489b04odpkoi510nnded9njo75g7h.apps.googleusercontent.com";
library.add(fab);

export const LoginPage = () => {
  useEffect(() => {
    getScript(
      "https://apis.google.com/js/platform.js?onload=renderButton",
      () => {
        gapi.load("auth2", () => {
          gapi.auth2.init({
            ux_mode: "redirect",
            client_id: CLIENT_ID,
            scope: "profile",
            redirect_uri: "http://localhost:3000/login/api/callback",
          });
        });
      }
    );
  }, []);

  const history = useHistory();

  const loginButton = () => {
    const gauth = gapi.auth2.getAuthInstance();
    const option = new gapi.auth2.SigninOptionsBuilder();
    option.setPrompt("select_account");
  };

  return (
    <div className="flex flex-col items-center min-h-full">
      <AuthHeader />
      <main className="max-w-3xl w-full flex flex-1 flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Slack에 로그인</h1>
        <div className="text-lg text-gray-700 leading-7 mb-8">
          <strong>직장에서 사용하는 이메일 주소</strong>를 사용하는 것이
          좋습니다.
        </div>
        <div className="w-96">
          <button className="flex items-center justify-center mb-4 w-full max-w-full h-11 border-2 rounded border-blue-lightning transition-all hover:shadow-loginForm">
            <img
              src={GoogleLogo}
              alt="logo"
              className="inline-block w-5 mr-4"
            />
            <span
              id="gauth"
              onClick={loginButton}
              className="inline-block text-lg font-bold text-blue-lightning"
            >
              Google을(를) 사용하여 로그인
            </span>
          </button>
          <button className="flex items-center justify-center w-full max-w-full h-11 border-2 rounded border-blue-lightning transition-all hover:shadow-loginForm">
            <FontAwesomeIcon
              icon={["fab", "apple"]}
              className="inline-block w-5 h-5 mr-4"
            />
            <span className="inline-block text-lg font-bold text-blue-lightning">
              Apple을(를) 사용하여 로그인
            </span>
          </button>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300"></hr>
            <span className="px-4">또는</span>
            <hr className="flex-grow border-t border-gray-300"></hr>
          </div>
          <form>
            <input
              placeholder="name@work-email.com"
              className="pl-4 w-full h-11 border border-gray-500 rounded outline-none placeholder-gray-500 transition-border duration-80 ease-out focus:border-transparent focus:shadow-loginFocus"
            />
            <button className="bg-purple-more_deep mt-4 w-full h-11 rounded text-white hover:bg-purple-deep">
              이메일로 로그인
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
