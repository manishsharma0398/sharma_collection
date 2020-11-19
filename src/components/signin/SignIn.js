import React, { Component } from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";
// import FirebaseAuth from "../../firebase/firebase.utils";

import "./SignIn.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accont</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={() => {
                console.log("behen chod");
                // const auth = new FirebaseAuth();
                // FirebaseAuth.signInWithGoogle();
                signInWithGoogle();
              }}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
