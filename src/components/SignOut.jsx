import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import withUser from "../context/withUser";
import { auth } from "../firebase";
//import * as ROUTES from "../constants/routes";

class SignOut extends Component {
  state = { user: null, navigate: false };

  //   componentDidMount = async () => {
  //     const { user } = this.props;

  //     if (user) {
  //       await auth.signOut().then(() => {
  //         this.setState({ user: user }, () => {
  //           console.log("Yes");
  //         });
  //       });
  //     }
  //   };
  logOut = () => {
    auth.signOut();
    this.setState({ navigate: true });
  };
  render() {
    // const { user } = this.state;
    // console.log(user);
    // if (user) {
    //   return <div>Log out!</div>;
    // } else {
    //   return <Redirect to="/" push={true} />;
    // }

    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return <button onClick={this.logOut}>Log Out</button>;
  }
}

export default SignOut;
