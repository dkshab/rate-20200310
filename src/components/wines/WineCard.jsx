import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class WineCard extends Component {
  render() {
    const {
      id,
      winePhotoURL,
      createdAt,
      title,
      description,
      type,
      grape
    } = this.props;

    return (
      <div className="WineCard">
        <div className="WineCard--Meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${winePhotoURL})` }}
          ></div>
          <ul className="details">
            <li className="author">
              {" "}
              <span className="fas fa-user"></span> Admin
            </li>
            <li className="date">
              <span className="fas fa-calendar-week"></span>{" "}
              {moment(createdAt.toDate()).calendar()}
            </li>
            <span className="fas fa-tags"></span>
            <li className="tags">
              <ul>
                <li>
                  {" "}
                  <Link to={`wines/${id}`}>{type}</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={`wines/${id}`}>{grape}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="WineCard--Description">
          <h1>{title}</h1>
          <h2>Opening the door to the future</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default WineCard;
