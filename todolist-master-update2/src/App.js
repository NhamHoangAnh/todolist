import React, { Component } from 'react';
import Form from './pages/form';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/form" component={Form} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
