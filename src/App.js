import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import components from './components';
import './App.css'

const { Footer, NavBar, Home, Auth, Parcels } = components;

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
                <Route path="/parcels" component={Parcels} />
              </Switch>
            </Router>
          </main>
          <Footer />     
      </div>
    );
  }
}

export default App;
