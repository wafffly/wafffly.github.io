import React from 'react';
import logo from '../assets/waffly-logo.png';
import landingArt from '../assets/waffly-landing-art.png';

class Landing extends React.Component {
  render() {
    return (
      <div id="landing" className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="display-3">
              <img
                src={logo}
                style={{height: '40px'}}
              />
              Waffly
            </h1>
            <p>
              creating simple projects
              <br/>
              that combine
              <br/>
              beauty and function.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src={landingArt}
              style={{width: '100%'}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
