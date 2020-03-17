import React, { useContext } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { UserContext } from "../context/providers/UserProvider";

const NavBar = props => {
  const user = useContext(UserContext);
  return (
    <div>
      <header>
        <div className="row">
          <a
            href="#nav-menu"
            id="nav-menu-toggle"
            className="nav-toggle"
            aria-label="Open nav menu"
          >
            <span className="sr-only">Open nav menu</span>
            <span className="fa fa-bars" aria-hidden="true"></span>
          </a>
          <div className="logo">
            <h1>
              <span className="fas fa-wine-glass-alt"></span> Rate Your Glass
            </h1>
            <h2>Your Web Design Destination</h2>
          </div>
        </div>
        <nav id="nav-menu" className="nav-menu" aria-label="Nav menu">
          <a
            href="#nav-menu-toggle"
            id="nav-menu-close"
            className="nav-close"
            aria-label="Close nav menu"
          >
            <span className="sr-only">Close nav menu</span>
            <span className="fa fa-close" aria-hidden="true"></span>
          </a>
          <ul>
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            {user && (
              <li>
                <Link to={ROUTES.SIGNIN}>Sign Out</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to={ROUTES.SIGNIN}>Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
        <a
          href="#nav-menu-toggle"
          className="backdrop"
          tabIndex="-1"
          hidden
        ></a>
      </header>
    </div>
  );
};

export default NavBar;
