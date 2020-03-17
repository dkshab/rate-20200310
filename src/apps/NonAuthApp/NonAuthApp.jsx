import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

import SignInAndSignUp from "../../components/SignInAndSignUp";
import NavBar from "../../components/NavBar";
import HomePage from "../../components/HomePage";

const NonAuthApp = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
      </main>
    </div>
  );
};

export default NonAuthApp;
