import React from "react";
import { Route } from "react-router-dom";

import SignInAndSignUp from "../../components/SignInAndSignUp";
import * as ROUTES from "../../constants/routes";
import NavBar from "../../components/NavBar";

const NonAuthApp = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
      </main>
    </div>
  );
};

export default NonAuthApp;
