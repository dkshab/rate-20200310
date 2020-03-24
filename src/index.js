import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./sass/index.scss";

import Application from "./apps/Application";
import UserProvider from "./context/providers/UserProvider";
import WinesProvider from "./context/providers/WinesProvider";

render(
  <Router>
    <UserProvider>
      <WinesProvider>
        <Application />
      </WinesProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
