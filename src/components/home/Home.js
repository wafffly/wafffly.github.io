import React from 'react';
import Landing from './Landing';
import ClosetrFeature from './ClosetrFeature';
import SparknodesFeature from './SparknodesFeature';

class Home extends React.Component {
  render() {
    document.querySelector('body').className = "";
    return (
      <div>
        <Landing/>
        <ClosetrFeature/>
        <SparknodesFeature/>
      </div>
    );
  }
}

export default Home;
