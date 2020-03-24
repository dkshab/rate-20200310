import React, { Component, createContext } from "react";
import { firestore } from "../../firebase";
import { collectIdsAndData } from "../../utilities";

export const WinesContext = createContext();

class WinesProvider extends Component {
  state = { wines: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = async () => {
    const snapshot = await firestore.collection("wines").get();

    const wines = snapshot.docs.map(collectIdsAndData);

    this.setState({ wines });
  };

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { wines } = this.state;
    const { children } = this.props;

    return (
      <WinesContext.Provider value={wines}>{children}</WinesContext.Provider>
    );
  }
}

export default WinesProvider;
