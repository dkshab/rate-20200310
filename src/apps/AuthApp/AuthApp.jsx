import React from "react";
import { Route } from "react-router-dom";

import SignInAndSignUp from "../../components/SignInAndSignUp";
import HomePage from "../../components/HomePage";
import * as ROUTES from "../../constants/routes";
import NavBar from "../../components/NavBar";

const AuthApp = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
      </main>
    </div>
  );
};

export default AuthApp;
