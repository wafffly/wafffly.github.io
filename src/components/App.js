import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../styles/styles.scss";

import Home from './home/Home';
import Team from './Team';
import ClosetrDetail from './work/ClosetrDetail';
import SparknodesDetail from './work/SparknodesDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/waffly/" exact component={Home}/>
          <Route path="/waffly/about" exact component={Team}/>
          <Route path="/waffly/closetr" exact component={ClosetrDetail}/>
          <Route path="/waffly/sparknodes" exact component={SparknodesDetail}/>
          <Route component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
