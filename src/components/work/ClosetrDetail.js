import React from 'react';
import { Link } from 'react-router-dom';
import closetrFeatureImg from '../../assets/closetr-feature-img.png';
import closetrDetailAddClothingImg from '../../assets/closetr_mockups_web-add-clothing-screen.png';
import closetrDetailClosetSearchImg from '../../assets/closetr_mockups_web-closet-search-screen.png';
import closetrDetailDashboardImg from '../../assets/closetr_mockups_web-dashboard.png';
import closetrDetailLogOutfitImg from '../../assets/closetr_mockups_web-log-outfit-screen.png';
import closetrDetailLogOutfitSearchImg from '../../assets/closetr_mockups_web-log-outfit-search-screen.png';

class ClosetrDetail extends React.Component {
  render() {
    document.querySelector('body').className = "project";
    return (
      <div id="landing" className="detail-page">
        <div className="page container">
          <div className="row row-space-sm">
            <div className="col-12">
              <div className="title">
                Closetr
              </div>
              <div className="subtitle">
                monitor your clothing usage patterns
                by letting your closet go digital
              </div>
            </div>
          </div>
          <div className="row row-space-lg mgn-bottom-2rem">
            <div className="col-12">
              <img
                className="feature-img"
                src={closetrFeatureImg}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 row-space-lg">
              <a href="http://github.com/wafffly/closetr/" className="btn btn-block navy">
                GITHUB
              </a>
            </div>
            <div className="col-12 col-sm-6 row-space-lg">
              <a href="http://fideslinga.com/closeter" className="btn btn-block navy">
                LIVE DEMO
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr/>
            </div>
            <div className="col-12">
              <div className="topic">
                What it is
              </div>
              <p>
                Closetr is a closet tracker that helps you have a
                better sense of your style, and spending. We want
                to make it easier to know what to wear next, and
                to give you insight on which clothes work (and
                don't work) for you.
              </p>
              <img
                className="row-space-lg feature-img"
                src={closetrDetailAddClothingImg}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={closetrDetailClosetSearchImg}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={closetrDetailDashboardImg}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={closetrDetailLogOutfitImg}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={closetrDetailLogOutfitSearchImg}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClosetrDetail;
