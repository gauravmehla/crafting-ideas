import React, { Component } from 'react';
import logo from '../assets/images/LA.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} />
      </div>
    );
  }
}

export default App;
