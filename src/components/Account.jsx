import React, { useContext } from "react";
import moment from "moment";

import { UserContext } from "../context/providers/UserProvider";
import { signOut } from "../firebase";
import { Link } from "react-router-dom";

const Account = () => {
  const user = useContext(UserContext);
  return (
    <section className="Account">
      <div className="Account--profile">
        {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
        <div className="Account--information">
          <Link to="/profile">
            <h2>{user.displayName}</h2>
          </Link>
          <p className="email">{user.email}</p>
          <p className="created-at">
            {moment(user.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default Account;
