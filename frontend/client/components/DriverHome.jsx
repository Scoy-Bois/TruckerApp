
import React, { Component } from 'react';
import './driverHome.css';

class DriverHome extends Component{
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        console.log('Click happened');
        console.log(this.props.data)
        this.setState({loginPage : true})
        console.log(this.props.data)
      }
      render() {
        return(
          <div className = "DriverHome-header">
            <header>
              <h1>Welcome To the Driver Home Page!</h1>
              <button onClick={this.handleClick}>Log Out</button>
            </header>
          </div>
            
        ) 
      }
}
export default DriverHome