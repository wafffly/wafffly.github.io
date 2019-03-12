import React from 'react';
import Landing from './Landing';
import ClosetrFeature from './ClosetrFeature';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Landing/>
        <ClosetrFeature/>
      </div>
    );
  }
}

export default Home;
