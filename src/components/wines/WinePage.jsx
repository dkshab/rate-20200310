import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";

import { firestore } from "../../firebase";
import { collectIdsAndData } from "../../utilities";
import withUser from "../../context/withUser";
import Ratings from "../ratings/Ratings";
import WineCard from "./WineCard";
import Spinner from "../Spinner";

class WinePage extends Component {
  state = {
    wine: null,
    ratings: [],
    numberOfRatings: 0,
    ratingsValue: 0,
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
    ratingsMeta: null
  };

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
      ratings.map(rating => {
        if (rating.starsSelected === 1) {
          this.setState({
            oneStar: this.state.oneStar + 1,
            ratingsValue: rating.starsSelected
          });
        }
        if (rating.starsSelected === 2) {
          this.setState({
            twoStar: this.state.twoStar + 1,
            ratingsValue: this.state.ratingsValue + rating.starsSelected
          });
        }
        if (rating.starsSelected === 3) {
          this.setState({
            threeStar: this.state.threeStar + 1,
            ratingsValue: this.state.ratingsValue + rating.starsSelected
          });
        }
        if (rating.starsSelected === 4) {
          this.setState({
            fourStar: this.state.fourStar + 1,
            ratingsValue: this.state.ratingsValue + rating.starsSelected
          });
        }
        if (rating.starsSelected === 5) {
          this.setState({
            fiveStar: this.state.fiveStar + 1,
            ratingsValue: this.state.ratingsValue + rating.starsSelected
          });
        }
        return true;
      });
      this.setState({ ratings, numberOfRatings: ratings.length });
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
    const {
      wine,
      ratings,
      numberOfRatings,
      ratingsValue,
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar
    } = this.state;
    const ratingsMeta = {
      numberOfRatings,
      ratingsValue,
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar
    };
    return (
      <div>
        <Suspense fallback={Spinner}>
          {wine && <WineCard {...wine} />}
          <Ratings
            ratings={ratings}
            ratingsMeta={ratingsMeta}
            onCreate={this.createRating}
          />
        </Suspense>
      </div>
    );
  }
}

export default withRouter(withUser(WinePage));
