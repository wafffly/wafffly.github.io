import React from 'react';
import closetrFeatureImg from '../assets/closetr-feature-img.png';

class ClosetrFeature extends React.Component {
  render() {
    return (
      <div id="closetr-feature">
        <div className="page container">
          <img
            className="feature-img"
            src={closetrFeatureImg}
          />
        </div>
      </div>
    );
  }
}

export default ClosetrFeature;
