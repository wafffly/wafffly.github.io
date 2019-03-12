import React from 'react';
import closetrFeatureImg from '../../assets/closetr-feature-img.svg';

class ClosetrFeature extends React.Component {
  render() {
    return (
      <div id="closetr-feature">
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
              sense of your style, and spending. We want to make it
              easier to know what to wear next, and to give you insight
              on which clothes work (and don't work) for you.
            </div>
            <button className="btn demo" style={{marginBottom: '50px'}}>
              <a href="http://fideslinga.com/work/closetr">
                VIEW PROJECT
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClosetrFeature;

/*<img
  className="feature-img"
  src={closetrFeatureImg}
/>*/
