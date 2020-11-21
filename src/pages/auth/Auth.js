import React from "react";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/signin/SignIn";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
