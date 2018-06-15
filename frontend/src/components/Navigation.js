import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <img href="#" className="nav-logo-left"/>
        <ul className="nav-right">
          <li className="active">
            <p>Home</p>
          </li>
          <li>
            <p>
              <a href="#">What We Do</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Projects</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Our Team</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Contact Us</a>
            </p>
          </li>
        </ul>
        {}
      </div>
    );
  }
}

export default Navigation;
