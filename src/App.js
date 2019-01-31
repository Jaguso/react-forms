import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Authors from './components/Authors/Authors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Signup />
          <Authors/>
        </div>
      </div>
    );
  }
}

export default App;
