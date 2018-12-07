import React, { Component } from 'react';
import './App.css';
import components from './components';

const { Footer, NavBar, Home } = components;

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <main className="main flex-column justify-content__center align-items__center">
            <Home />
          </main>
          <Footer />     
      </div>
    );
  }
}

export default App;
