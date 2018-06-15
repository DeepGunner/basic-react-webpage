import React from "react";

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
        <ul className="footMenu">
          <li>About Us
            <ul>
              <br/>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                
            </ul>
          </li>
          <li>Portfolio
            <ul>
            <br/>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                
            </ul>
          </li>
          <li>Events
            <ul>    
            <br/>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                <a href="#"><li>Lorem Ipsum</li></a>
                
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
