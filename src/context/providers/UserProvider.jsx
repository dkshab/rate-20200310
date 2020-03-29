import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase";
import * as ROUTES from "../../constants/routes";

export const UserContext = createContext();

class UserProvider extends Component {
  state = { user: null };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            { user: { uid: snapshot.id, ...snapshot.data() } },
            () => {
              console.log(this.state.user);
            }
          );
        });
      }
      // if (!userAuth) {
      //   this.props.history.push(ROUTES.SIGNIN);
      // }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

export default withRouter(UserProvider);
