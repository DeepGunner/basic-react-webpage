import React from "react";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Content from "./Content";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <MobileNav />
          <div id="heading-container">
          <span id="text">
          Morbi Consectetuer Placerat Nulla Mus
            Urna tortor.<br />
            Quis euismod urna, aenean diam tempor ac pretium.<br />
            for farming.
          </span>
        </div>
        
        <Content />
      </div>
    );
  }
}

export default Container;
