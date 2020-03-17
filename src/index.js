import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./sass/index.scss";

import Application from "./apps/Application";
import UserProvider from "./context/providers/UserProvider";

render(
  <Router>
    <UserProvider>
      <Application />
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
