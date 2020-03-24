import React, { Component } from "react";

import WineList from "./WineList";
import ReviewsList from "./ReviewsList";
import UsersList from "./UsersList";

class AdminContent extends Component {
  render() {
    const { show } = this.props;

    if (show === "wines") {
      return <WineList />;
    } else if (show === "reviews") {
      return <ReviewsList />;
    } else if (show === "users") {
      return <UsersList />;
    } else {
      return "Content";
    }
  }
}

export default AdminContent;
