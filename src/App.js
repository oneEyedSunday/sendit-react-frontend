import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';

import components from './components';

const { Footer, NavBar, Home, Auth } = components;

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <main className="main">
            <Router>
              <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/signin" component={Auth}></Route>
              <Route path="/signup" component={Auth}></Route>
              </Switch>
            </Router>
          </main>
          <Footer />     
      </div>
    );
  }
}

export default App;
