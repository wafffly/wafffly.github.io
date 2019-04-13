import React from 'react';
import { Link } from 'react-router-dom';
import sparknodesFeatureImg from '../../assets/sparknodes-feature-img.png';
import sparknodesDetailDesign1Img from '../../assets/sparknodes-design-1.png';
import sparknodesDetailDesign2Img from '../../assets/sparknodes-design-2.png';
import sparknodesDetailDesign3Img from '../../assets/sparknodes-design-3.png';
import sparknodesDetailScreen1Img from '../../assets/sparknodes-screen-1.png';
import sparknodesDetailScreen2Img from '../../assets/sparknodes-screen-2.png';
import sparknodesDetailScreen3Img from '../../assets/sparknodes-screen-3.png';
import sparknodesDetailScreen4Img from '../../assets/sparknodes-screen-4.png';

class SparknodesDetail extends React.Component {
  render() {
    document.querySelector('body').className = "project";
    return (
      <div id="landing" className="detail-page">
        <div className="page container">
          <div className="row row-space-sm">
            <div className="col-12">
              <div className="title">
                Sparknodes
              </div>
              <div className="subtitle">
                a visual introduction to theory of computation,
                data structures, and algorithms.
              </div>
            </div>
          </div>
          <div className="row row-space-lg mgn-bottom-2rem">
            <div className="col-12">
              <img
                className="feature-img"
                src={sparknodesFeatureImg}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 row-space-lg">
              <a href="http://github.com/wafffly/sparknodes/" className="btn btn-block navy">
                GITHUB
              </a>
            </div>
            <div className="col-12 col-sm-6 row-space-lg">
              <a href="http://fideslinga.com/sparknodes/" className="btn btn-block navy">
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
                A learning tool for Computer Science Theory
                that is focused more on the visuals. We are
                Computer Science students ourselves, and we
                find that using graphics and diagrams helped
                ground many theoritical concepts.
              </p>
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailDesign1Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailDesign2Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailDesign3Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailScreen1Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailScreen2Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailScreen3Img}
              />
            </div>
            <div className="col-12">
              <img
                className="row-space-lg feature-img"
                src={sparknodesDetailScreen4Img}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SparknodesDetail;
