import React from 'react';
import axios from 'axios';

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
      <div>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
      </div>
    );
  }
}
export default App;