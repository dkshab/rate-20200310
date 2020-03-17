import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import NavBar from "../../components/NavBar";
import Account from "../../components/Account";
import UserProfile from "../../components/UserProfile";
import SignInAndSignUp from "../../components/SignInAndSignUp";
import HomePage from "../../components/HomePage";
import Reviews from "../../components/reviews/Reviews";

const AuthApp = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.PROFILE} component={UserProfile} />
        <Route exact path={ROUTES.REVIEWS} component={Reviews} />
      </main>
    </div>
  );
};

export default AuthApp;
