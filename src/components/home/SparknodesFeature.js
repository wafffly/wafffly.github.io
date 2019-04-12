import React from 'react';
import { Link } from 'react-router-dom';
import sparknodesFeatureImg from '../../assets/sparknodes-feature-img.png';

class SparknodesFeature extends React.Component {
  render() {
    return (
      <div className="project-feature">
        <div className="page container">
          <img
            className="feature-img"
            src={sparknodesFeatureImg}
          />
          <div className="feature-caption">
            <div className="title">
              sparknodes
            </div>
            <div className="caption">
            Sparknodes is a visual introduction to the theory of computation,
            data structures, and algorithms.
            </div>
            <Link
              to="/waffly/sparknodes"
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

export default SparknodesFeature;
