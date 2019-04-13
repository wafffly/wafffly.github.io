import React from 'react';
import logo from '../../assets/waffly-logo.png';
import landingArt from '../../assets/waffly-landing-art.png';
import arrowDown from '../../assets/arrow-down.svg';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <div className="page container text-center">
          <div className="row landing-header">
            <div className="col-12 landing-part-one">
              <h1>
                <img
                  src={logo}
                  className="waffly-logo"
                />
                <br/>
                WAFFLY
              </h1>
              <span className="subtitle center">
                creating simple projects
                <br/>
                that combine
                <br/>
                beauty and function.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="expand-caption">
                <span className="subtitle-sm">
                  What we've been working on
                </span>
                <a href="#" className="icon-arrow-down">
                  <img
                    src={arrowDown}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
