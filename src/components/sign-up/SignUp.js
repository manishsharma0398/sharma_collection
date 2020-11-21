import React, { Component } from "react";
import FormInput from "../form-input/FormInput";

import CustomButton from "../custom-button/CustomButton";

import "./SignUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("cannot sign up", error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don not have a account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Full Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="SUBMIT">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
