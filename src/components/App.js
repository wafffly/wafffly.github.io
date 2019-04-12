import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "../styles/styles.scss";

import Home from './home/Home';
import Team from './Team';
import ClosetrDetail from './work/ClosetrDetail';
import SparknodesDetail from './work/SparknodesDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={Team}/>
          <Route path="/closetr" exact component={ClosetrDetail}/>
          <Route path="/sparknodes" exact component={SparknodesDetail}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
