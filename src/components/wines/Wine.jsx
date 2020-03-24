import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Wine = ({
  id,
  createdAt,
  grape,
  title,
  type,
  user,
  winePhotoURL,
  description
}) => {
  return (
    <div className="WineCard">
      <div className="Wine--Meta">
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
      <div className="Wine--Description">
        <h1>{title}</h1>
        <h2>Opening the door to the future</h2>
        <p>{description}</p>
        <p className="read-more">
          <Link to={`wines/${id}`}>Read More</Link>
        </p>
      </div>
    </div>
  );
};

export default Wine;
