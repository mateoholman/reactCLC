import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import materialUIMock from './material-ui/materialUiMock';

import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={materialUIMock}/>
          <Route path="/material-ui" component={materialUIMock} />
        </div>
      </Router>
    );
  }
}

export default App;
