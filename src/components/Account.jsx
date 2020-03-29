import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../context/providers/UserProvider";
import * as ROUTES from "../../src/constants/routes";

const Account = () => {
  const user = useContext(UserContext);
  return (
    <section className="Account">
      <div className="Profile">
        <div className="Profile--username">
          <h2>{user.email}</h2>
          <p>
            <span>6</span> posts
          </p>
          <p>
            <span>22</span> followers
          </p>
          <p>
            <span>1999</span> following
          </p>
        </div>
        <div className="Profile--avatar">
          {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
        </div>
        <p className="Profile--bio">Is a person</p>
        <Link to={ROUTES.PROFILE}>
          <p>Update details</p>
        </Link>
      </div>
    </section>
  );
};

export default Account;
