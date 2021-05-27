import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "../pages/auth/login-page";
import { LoggedOutMainPage } from "../pages/logged-out-main";

export const LoggedOutRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <LoggedOutMainPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
        </Switch>
    </Router>
  );
};
