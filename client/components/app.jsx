import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: [],
      news: []
    }
  }

  componentDidMount(){
    axios.get('/api/about')
    .then(response => {
      this.setState({
        about: response.data
      });
    });

    axios.get('/api/news')
    .then(response => {
      this.setState({
        news: response.data
      });
    });
  }

  render() {
    console.log('staaateee', this.state);
    return (
      <div>are you here</div>
    )
  }
}

export default App;