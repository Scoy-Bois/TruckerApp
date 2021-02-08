import React from 'react';
import axios from 'axios';
import './SponsorHome.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsorName: ""
    };
  }

  componentDidMount() {
    axios.get('/sponsorName')
      .then(res => this.setState({sponsorName: res.data}))
      .catch(console.log);
      

  }

  render() {
    return (
      <div className = "sponsorHeader">
       <header>
        <h1 >
            Welcome {this.state.sponsorName}!
        </h1>


        <div className = "sponsorButtons">

            <button>
                View Active Drivers
            </button>

            <button>
                View Catalog
            </button>
            
        </div>
        </header>
        
      </div>
      
    );
  }
}
export default App;