import React from "react";
import { Route } from "react-router-dom";

import SignInAndSignUp from "../../components/SignInAndSignUp";
import HomePage from "../../components/HomePage";
import NavBarNonAuth from "../../apps/NonAuthApp/NavBarNonAuth";
import * as ROUTES from "../../constants/routes";

const NonAuthApp = () => {
  return (
    <div>
      <NavBarNonAuth />
      <main>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
      </main>
    </div>
  );
};

export default NonAuthApp;
