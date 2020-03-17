import React, { useContext, Suspense } from "react";

import "../css/main.css";
import { UserContext } from "../context/providers/UserProvider";

const AuthenticatedApp = React.lazy(() => import("./AuthApp/AuthApp"));
const NonAuthenticatedApp = React.lazy(() => import("./NonAuthApp/NonAuthApp"));

function Application() {
  const user = useContext(UserContext);
  //console.log("User: ", user);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default Application;
