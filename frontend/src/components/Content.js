import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="side-menu">
          <div className="submenu">
            <ul>
              <h2>Sub Menu</h2>
              <li>
                {" "}
                <a href="#">Home</a>
              </li>
              <li>
                {" "}
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
          <div className="info">
            <img className="info-background"  />
            <img className="my-picture"  />
            <div className="info-strings">
              <p>
                <b>Name</b>: John Doe{" "}
              </p>
              <p>
                <b>Email</b>:johndoe@something.com{" "}
              </p>
              <p>
                <b>Phone</b>: +91 8888888888
              </p>
            </div>
            <div className="enquiry">
              <h3> Say Hi!</h3>
              <p text-align="left">Subject</p>
              <input type="text" />
              <br />
              <br />
              <p>Message</p>
              <textarea defaultValue={""} />
              <br />
              <br />
              <button type="submit">SEND</button>
            </div>
            {}
            <div className="map-responsive">
              <h3>My Work Place</h3>
              <iframe
                src="https://maps.google.com/maps?width=250&amp;height=150&amp;hl=en&amp;q=Hyderabad%2C%20India+(Workplace)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                width={250}
                height={120}
                frameBorder={0}
                style={{
                  border: 0
                }}
                allowFullScreen
              />
              <p>
                Hyderabd <br />
                Telengana <br />
                India-500032
              </p>
            </div>
          </div>
        </div>
        {}
        <div className="main-content">
          <div id="content-introduction">
            <h1>Pulvinar Consequat Feugiat Metus Sed Hymenaeos.</h1>
            <h3 id="introduction-para1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio aenean sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Neque sodales ut etiam sit. Elit pellentesque habitant morbi tristique senectus et netus. Odio tempor orci dapibus ultrices in iaculis nunc sed. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Adipiscing elit ut aliquam purus sit amet luctus. Elit eget gravida cum sociis natoque penatibus et magnis dis. Semper auctor neque vitae tempus quam pellentesque nec nam. Pellentesque massa placerat duis ultricies lacus sed turpis. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
            </h3>
            <p className="introduction-para2">
            Enim eu turpis egestas pretium aenean. Pretium viverra suspendisse potenti nullam. Viverra nam libero justo laoreet sit amet cursus sit. Porttitor leo a diam sollicitudin. Eget nunc lobortis mattis aliquam faucibus purus in massa. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Integer feugiat scelerisque varius morbi. Vitae nunc sed velit dignissim. Pharetra convallis posuere morbi leo urna molestie at elementum. Turpis egestas sed tempus urna et pharetra pharetra massa. At auctor urna nunc id cursus metus aliquam eleifend. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.
            </p>
            <br />
            <div className="introduction-para2">
              <div id="quote">
                <p id="saying">
                  {" "}
                  <b>
                    <i>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque habitant morbi tristique senectus.
                    </i>
                  </b>{" "}
                </p>
                <p id="author">Richard McClintock</p>
              </div>
              <p id="normal-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nullam ac tortor vitae purus. Sit amet massa vitae tortor condimentum lacinia quis.
              </p>
            </div>
          </div>
        </div>
        {}
        <div className="more_articles">
          <div className="headline">
            <h3> More in the Series </h3>
          </div>
          <div className="article_rect">
            <img  />
            <h2>Quis Lorem</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nullam ac tortor vitae purus. Sit amet massa vitae tortor condimentum lacinia quis.
            </p>
          </div>
          <div className="article_rect">
            <img  />
            <h2>Faucibus Nunc Facilisi</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque id nibh. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nullam ac tortor vitae purus. Sit amet massa vitae tortor condimentum lacinia quis.
            </p>
          </div>
        </div>
        {}
        <div className="related_articles">
          <div className="headline">
            <h3>Related Articles</h3>
          </div>
          <div className="article_square">
            <img />
            <h2>Suspendisse Malesuada Erat</h2>
            <p>Egestas augue. Cum sit sapien nonummy montes posuere cursus ut. Vulputate.</p>
          </div>
          <div className="article_square">
            <img  />
            <h2>Vulputate Felis Dapibus Risus</h2>
            <p>Erat aenean suscipit litora netus torquent dictumst nam imperdiet. Natoque.</p>
          </div>
          <div className="article_square">
            <img  />
            <h2>Eleifend Sapien</h2>
            <p>Sociis et accumsan sociis vulputate dui bibendum vitae nostra, habitasse.</p>
          </div>
          <div className="article_square">
            <img  />
            <h2>Vivamus Donec</h2>
            <p>Urna tortor. Quis euismod urna, aenean diam tempor ac pretium.</p>
          </div>
          
        </div>
        {}
        <div className="footer" />
      </div>
    );
  }
}

export default Content;
