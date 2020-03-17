import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInAndSignUp = () => {
  return (
    <div className="SignInAndSignUp">
      <SignIn />
      <hr />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
