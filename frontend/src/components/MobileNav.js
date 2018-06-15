import React from "react";

class MobileNav extends React.Component {
  render() {
    return (
      <div className="nav-mobile">
        <img className="logo-mobile" />
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>What We Do</li>
                </a>
                <a href="#">
                    <li>Projects</li>
                </a>
                <a href="#">
                    <li>Our Team</li>
                </a>
                <a href="#">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MobileNav;
