import React from 'react';
import logo from '../assets/waffly-logo.png';
import landingArt from '../assets/waffly-landing-art.png';
import arrowDown from '../assets/arrow-down.png';
import landingHeader from '../assets/landing-header.svg';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing">
        <div className="page container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>
                <img
                  src={logo}
                  className="waffly-logo"
                />
                <br/>
                WAFFLY
              </h1>
              <span className="subtitle">
                creating simple projects
                <br/>
                that combine
                <br/>
                beauty and function.
              </span>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={landingArt}
                style={{width: '100%'}}
              />
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
