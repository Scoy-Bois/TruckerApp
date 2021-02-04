import React from 'react';
import axios from 'axios';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get('/username')
      .then(res => this.setState({username: res.data}))
      .catch(console.log);
      axios.get('/password')
      .then(res => this.setState({password: res.data}))
      .catch(console.log);

  }

  render() {
    return (
      <div className="App">
         <header className="App-header">
          Welcome! Please Log In!
          <form>
            <label>
              <input type = "text" name = "username" />
            </label>
            {"\n"}
            <label>
              <input type = "text" name = "password" />
            </label>
            <input type = "submit" value = "submit" />
          </form>
        </header>
      </div>
    );
  }
}
export default App;