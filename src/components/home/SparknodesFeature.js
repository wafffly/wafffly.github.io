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
            <button className="btn navy" style={{marginBottom: '50px'}}>
              <Link to="/sparknodes">
                VIEW PROJECT
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SparknodesFeature;
