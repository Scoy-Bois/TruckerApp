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
    axios.get('/prices')
      .then(res => this.setState({ bitcoinValue: res.data }))
      .catch(console.log);
  }

  render() {
    const { bitcoinValue } = this.state;

    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;