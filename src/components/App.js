import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/Home';
import Team from './Team';
import ClosetrDetail from './work/ClosetrDetail';
import "../styles/styles.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={Team}/>
          <Route path="/closetr" exact component={ClosetrDetail}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
