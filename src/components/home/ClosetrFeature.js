import React from 'react';
import { Link } from 'react-router-dom';
import closetrFeatureImg from '../../assets/closetr-feature-img.png';

class ClosetrFeature extends React.Component {
  render() {
    return (
      <div className="project-feature">
        <div className="page container">
          <img
            className="feature-img"
            src={closetrFeatureImg}
          />
          <div className="feature-caption">
            <div className="title">
              closetr
            </div>
            <div className="caption">
              Closetr is a closet tracker that helps you have a better
              sense of your style, and spending.
            </div>
            <Link
              to="/closetr"
              className="btn navy"
              style={{marginBottom: '50px'}}>
              VIEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ClosetrFeature;
