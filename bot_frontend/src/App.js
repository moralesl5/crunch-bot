import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Display from './components/Display'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: [],
      displayed: {},
      showAll: false
    }
  }

  showResults(e){
    if (e.target.className === "show-all"){
      this.setState({
        showAll: true
      })
    } else{
      this.setState({
        showAll: false
      })
    }
  }

  displayedInfo(key){
    this.setState({
      displayed: this.state.results[key]
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/entries')
      .then((response) =>{
        return response.json()
      })
      .then((responseJson) =>{
        console.log(responseJson)
        this.setState((prevState) =>{
          return{
            results: responseJson
          }
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Header 
          displayedInfo = {this.displayedInfo.bind(this)}
          showAllToggle = {this.showResults.bind(this)}
          status = {this.state.showAll}
        />
        <Display 
          results = {this.state.results}
          displayed = {this.state.displayed}
          showAll = {this.state.showAll}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
