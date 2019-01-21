import React, { Component } from 'react';
import Header from '../src/Components/Header'
import Newlist from './Components/Newlist'
import JSON from './db.json'
import './App.css';


class App extends Component {
  state = {
    news: JSON
  }
  render() {
    console.log(this.state.new)
    return (
      <div className="App">
          <Header />
          <Newlist 
          news={this.state.news} 
          donkey="Me">
            Hello Buddy
          </Newlist>
      </div>
    );
  }
}

export default App;
