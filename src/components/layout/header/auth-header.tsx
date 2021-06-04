import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import slackLogo from "../../../images/slack_logo.svg";
import { getScript } from "../../../util/get-script";

const API_KEY = "AIzaSyBtEpN1L6-vIH243pXpMdEvDx7q508PIe4";
const CLIENT_ID =
  "129447111923-7e2489b04odpkoi510nnded9njo75g7h.apps.googleusercontent.com";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
const PEOPLE_URI = "https://people.googleapis.com/v1/contactGroups";

export const AuthHeader = () => {
  // useEffect(() => {
  //   getScript("https://apis.google.com/js/platform.js", () => {
  //     gapi.load("auth2", () => {
  //       gapi.auth2
  //         .init({
  //           client_id: CLIENT_ID,
  //           scope: "profile",
  //           redirect_uri: "/login/auth",
  //         })
  //         .then(() => {
  //           console.log("init success");
  //         });
  //     });
  //   });
  // }, []);

  // const history = useHistory();

  // const login = () => {
  //   const gauth = gapi.auth2.getAuthInstance();
  //   gauth.signIn().then(() => {
  //     console.log(gauth);
  //   });
  // };

  // const logout = () => {
  //   const gauth = gapi.auth2.getAuthInstance();
  //   gauth.signOut().then(() => {
  //     console.log("signed Out");
  //   });
  // };

  return (
    <header className="grid grid-cols-3 items-center w-full py-10">
      <div></div>
      <div className="text-center">
        <Link to="/">
          <img src={slackLogo} alt="logo" className="inline-block w-36" />
        </Link>
      </div>
      <div className="flex justify-end">
        <div className="pr-10 text-right">
          <h6 className="text-sm font-sans text-gray-600">Slack을 처음 사용하시나요?</h6>
          <Link to="/create-account" className="text-sm font-bold text-blue-middle">
            계정생성
          </Link>
        </div>
      </div>
      {/* <button onClick={login}>login</button>
      <button onClick={logout}>logout</button> */}
    </header>
  );
};
