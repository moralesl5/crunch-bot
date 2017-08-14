import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Display from './components/Display'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
        <Footer />
      </div>
    );
  }
}

export default App;
