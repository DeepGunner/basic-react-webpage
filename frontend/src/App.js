import React, { Component } from 'react';
import logo from './logo.svg';
import Container from "./components/Container"
import Footer from "./components/Footer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
        <Footer/>
      </div>
    );
  }
}

export default App;
