import React from "react";

import Star from "../stars/Star";

const Rating = ({ title, content, user, createdAt, starsSelected }) => {
  const defaultStars = 5;
  return (
    // <article className="Rating">
    //   <span className="Rating--author">{user.displayName}</span>
    //   <span className="Rating--content">{content}</span>
    //   <span className="Rating--timestamp">
    //     {moment(createdAt.toDate()).calendar()}
    //   </span>
    // </article>
    <div className="Rating">
      <div className="header">
        <div className="meta">
          <h4>{user.displayName}</h4>
          {[...Array(defaultStars)].map((n, i) => (
            <Star key={i} selected={i < starsSelected} />
          ))}
        </div>
      </div>
      <div className="title">{title}</div>
      <div className="content">
        <p className="excerpt">{content}</p>
      </div>
    </div>
  );
};

export default Rating;
