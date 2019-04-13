import React from 'react';
import { Router, BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "../styles/styles.scss";

import Home from './home/Home';
import Team from './Team';
import ClosetrDetail from './work/ClosetrDetail';
import SparknodesDetail from './work/SparknodesDetail';

class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    history.listen((location, action) => {
      window.scrollTo(0, 0);
    });
    console.log(this.props);
    return (
      <Router
        history = {history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={Team}/>
          <Route path="/closetr" exact component={ClosetrDetail}/>
          <Route path="/sparknodes" exact component={SparknodesDetail}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
