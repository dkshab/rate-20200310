import React from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import Account from "../../components/Account";
import UserProfile from "../../components/UserProfile";
import SignInAndSignUp from "../../components/SignInAndSignUp";
import HomePage from "../../components/HomePage";
import Admin from "../../components/Admin/Admin";
import WinePage from "../../components/wines/WinePage";
import Wines from "../../components/wines/Wines";
import NavBarAuth from "../../apps/AuthApp/NavBarAuth";
import About from "../../components/About";

const AuthApp = () => {
  return (
    <div>
      <NavBarAuth />
      <main>
        <Route exact path={ROUTES.SIGNIN} component={SignInAndSignUp} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.PROFILE} component={UserProfile} />
        <Route exact path={ROUTES.ADMIN} component={Admin} />
        <Route exact path={ROUTES.WINEPAGE} component={WinePage} />
        <Route exact path={ROUTES.WINES} component={Wines} />
      </main>
    </div>
  );
};

export default AuthApp;
