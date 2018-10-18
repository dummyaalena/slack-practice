import React, { Component } from 'react';
import logo from './logo.svg';
import CustomNavbar from './component/CustomNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar/>
      </div>
    );
  }
}

export default App;
