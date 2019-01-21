import React, { Component } from 'react'
import './header.scss'


//ES6

//inherit class Car

//functional component + state {highly recommend}
class Header extends Component {   
   constructor(props){
       super(props)

       this.state = {
           keywords:'Hello'
       }
   }
//Synthetic Event
    /*inputChangeHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            keyWords: e.target.value
        })
    }*/
    inputChangeHandler=(e)=>{
        const style = e.target.value === '' ? 'active' : 'non-active';
        this.setState({
            active: 'active',
            keywords: e.target.value
        })
    }

  render() { 
      //styles
      
    return (   
        <header>
          <div 
          className="logo"
          >
          Logo
          </div>
            <input 
              type="text" 
              onChange={(e)=>this.inputChangeHandler}
            //onChange={this.inputChangeHandler()}
            />
        </header>
    )
  }
}

export default Header;
