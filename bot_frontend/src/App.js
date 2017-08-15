import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Feed from './components/Feed'
import Display from './components/Display'

class App extends Component {
  constructor(){
    super()
    this.state = {
      results: [],
      displayed: {},
      home: true
    }
  }

  toggleHome(e){
    console.log('TOGGLE TOGGLE');
    console.log(e.target.className);
    if (e.target.className === 'home-toggle'){
      this.setState({
        home: false
      }) 
      }else{
        this.setState({
          home: true
        })
      }
    }

  displayedInfo(key){
    console.log('displayedInfo fired from app.  key is: ' + key)
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
          status = {this.state.showAll}
        />
        <Feed 
          displayedInfo = {this.displayedInfo.bind(this)}
          list = {this.state.results}
          displayed = {this.state.displayed}
          showAll = {this.state.showAll}
          toggleHome = {this.toggleHome.bind(this)}
          status = {this.state.home}
        />
        <Display
          displayed = {this.state.displayed}
          status = {this.state.home}
        />
      </div>
    );
  }
}

export default App;
