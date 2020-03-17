import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "" };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
    this.setState({ displayName: "", email: "", password: "" });
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="displayName">Display name </label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              value={displayName}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
            <button className="signup" type="submit">
              Sign Up
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
