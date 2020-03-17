import React from "react";
import UserProvider from "./providers/UserProvider";

function AppProviders({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default AppProviders;
