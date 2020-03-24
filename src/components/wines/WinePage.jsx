import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { firestore } from "../../firebase";
import { collectIdsAndData } from "../../utilities";
import withUser from "../../context/withUser";
import Wine from "./Wine";
import Ratings from "../ratings/Ratings";

class WinePage extends Component {
  state = { wine: null, ratings: [] };

  get wineId() {
    return this.props.match.params.id;
  }

  get wineRef() {
    return firestore.doc(`wines/${this.wineId}`);
  }

  get ratingsRef() {
    return this.wineRef.collection("ratings");
  }

  unsubscribeFromWine = null;
  unsubscribeFromRatings = null;

  componentDidMount = async () => {
    this.unsubscribeFromWine = this.wineRef.onSnapshot(snapshot => {
      const wine = collectIdsAndData(snapshot);
      this.setState({ wine });
    });

    this.unsubscribeFromRatings = this.ratingsRef.onSnapshot(snapshot => {
      const ratings = snapshot.docs.map(collectIdsAndData);
      this.setState({ ratings });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromWine();
    this.unsubscribeFromRatings();
  };

  createRating = rating => {
    const { user } = this.props;
    this.ratingsRef.add({ ...rating, user });
  };

  render() {
    const { wine, ratings } = this.state;
    return (
      <div>
        {wine && <Wine {...wine} />}
        <Ratings ratings={ratings} onCreate={this.createRating} />
      </div>
    );
  }
}

export default withRouter(withUser(WinePage));
