import React, { Component } from 'react'
import './header.scss'

//functional component + state {highly recommend}
class Header extends Component {
   
    state = {
        title: "The Keywords are:",
        keyWords: ""

    }
//Synthetic Event
    /*inputChangeHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            keyWords: e.target.value
        })
    }*/
  render() {     
    console.log(this.state.keyWords) 
    return (  
        
        <header>
          <div className="logo">Logo</div>
          <input 
            type="text" 
            //onChange={this.inputChangeHandler()}
          />
          <div>{this.state.title}</div>
          <div></div>
        </header>
    )
  }
}

export default Header;
