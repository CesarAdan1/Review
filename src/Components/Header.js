import React, { Component } from 'react'
import './header.scss'


//ES6

class React{
    constructor() {
        this.props = {
           //props bring whatever 
        }
    }
}

//inherit class Car

class Page extends Car {
    //constructor
    constructor(){
        super()
        this.windows = 4;
    }
}

const car = new Car();
const ford = new Ford();

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
    inputChangeHandler(e){
        console.log(e.target.value)
    }

  render() {     
    console.log(this.state.keyWords) 
    return (   
        <header>
          <div 
          className="logo"
          >
          Logo
          </div>
            <input 
              type="text" 
              onChange={(e)=>this.inputChangeHandler(e)}
            //onChange={this.inputChangeHandler()}
            />
          <div>
            {this.state.title}
          </div>
        </header>
    )
  }
}

export default Header;
