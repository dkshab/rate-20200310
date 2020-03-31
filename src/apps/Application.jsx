import React, { useContext, Suspense } from "react";

import "../css/main.css";
import { UserContext } from "../context/providers/UserProvider";
import Spinner from "../components/Spinner";

const AuthenticatedApp = React.lazy(() => import("./AuthApp/AuthApp"));
const NonAuthenticatedApp = React.lazy(() => import("./NonAuthApp/NonAuthApp"));

function Application() {
  const user = useContext(UserContext);
  //console.log("User: ", user);
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        {user ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default Application;
