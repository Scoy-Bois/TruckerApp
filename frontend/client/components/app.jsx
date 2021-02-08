import React from 'react';
import axios from 'axios';
import './app.css';
import DriverHome from './DriverHome.jsx';
import SponsorHome from './SponsorHome.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginPage: true
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //handle event for changes in value
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  //This is where we check if the log in information for the user is correct. if so, we go ahead and render the next information.
  handleSubmit(event) {
    this.setState({loginPage: false})
    event.preventDefault();
  }
  handleLoginChange(event){
    this.setState({loginPage: value})
    event.preventDefault ();
  }

  //this is going to check the values for any REST api requests
  //most likely going to be a post request sending the data for the username and password
  //then checking if that matches with the database information, and if it does, login occurs.
  componentDidMount() {
    axios.get('/username')
      .then(res => this.setState({username: res.data}))
      .catch(console.log);
      axios.get('/password')
      .then(res => this.setState({password: res.data}))
      .catch(console.log);

  }

  render() {
    //if the user has not logged in yet, then set the loginPage state to true, so it displays the page for them to log in.

    if(this.state.loginPage){
      return ( 
        <div className="App-header">
           <header>
            <h1>Welcome! Please Log In!</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
              </label>
              {"\n"}
              <label>
                Password:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              {"\n"}
            </form>
          </header>
        </div>
      );
    }
    //if the loginPage state is false, then they have already logged in, so you should display the users home page.
    else{
      return(
        <div>
<<<<<<< HEAD
          <DriverHome data = {this.state.loginPage}/> 
=======
          <SponsorHome/> 
>>>>>>> d0be3fcbbf32d28257a6307231ed15e7b55bc8d4
        </div>
      )
    };
  }
}
export default App;