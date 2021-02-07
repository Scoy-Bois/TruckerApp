
import React, { Component } from 'react';
import './driverHome.css';

class DriverHome extends Component{
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        console.log('Click happened');
      }
      render() {
        return(
          <div className = "DriverHome-header">
            <header>
              <h1>Welcome To the Driver Home Page!</h1>
              <button onClick={this.handleClick}>Click Me</button>
            </header>
          </div>
            
        ) 
      }
}
export default DriverHome