import React, { Component } from "react";
import AdminContent from "./AdminContent";

class Admin extends Component {
  state = { show: "wines" };

  handleClick = event => {
    const show = event.target.textContent.toLowerCase();
    this.setState({ show });
    //console.log(show);
  };
  render() {
    const { show } = this.state;
    return (
      <div className="Admin">
        <nav>
          <header>
            <span className="fas fa-user"></span>
            John Doe
          </header>

          <ul>
            <li>Navigation</li>
            <li>Dashboard</li>
            <li onClick={this.handleClick}>Users</li>
            <li onClick={this.handleClick}>Wines</li>
            <li onClick={this.handleClick}>Reviews</li>
            <li>Settings</li>
          </ul>
        </nav>

        <main>
          <h1>Dashboard</h1>
          <div className="flex-grid">
            <h2>Headline</h2>
            <div className="content">
              <AdminContent show={show} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Admin;
