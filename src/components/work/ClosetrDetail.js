import React from 'react';
import closetrFeatureImg from '../../assets/closetr-feature-img.svg';

class ClosetrDetail extends React.Component {
  render() {
    return (
      <div id="landing">
        <div className="page container">
          <div className="subtitle center mgn-bottom-2rem">
            monitor your clothing usage patterns
            <br/>
            by letting your closet go digital
          </div>
          <img
            className="feature-img"
            src={closetrFeatureImg}
          />
        </div>
      </div>
    );
  }
}

export default ClosetrDetail;
