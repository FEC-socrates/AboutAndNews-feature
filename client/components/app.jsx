import React from 'react';
import axios from 'axios';
import Description from './description.jsx';
import News from './news.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: [],
      news: []
    }
  }

  componentDidMount() {
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

    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.state.about.id) {
        return item;
      }
    })
    console.log(items, 'dsfidhrguh')
    return (
      <div>
        <Description data={this.state.about} />
        <News data={items} />
      </div>
    )
  }
}

export default App;