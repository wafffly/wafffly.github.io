import React from 'react';
import Landing from './Landing';
import ClosetrFeature from './ClosetrFeature';
import "../styles/styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Landing/>
        <ClosetrFeature/>
      </div>
    );
  }
}

export default App;
