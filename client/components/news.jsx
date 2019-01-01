import React from 'react';
import NewsList from './newsList.jsx';
import axios from 'axios';
class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      about: []
    }

    this.handleNewsClick = this.handleNewsClick.bind(this);

  }

  componentDidMount() {
    axios.get('/api/news')
      .then(response => {
        this.setState({
          news: response.data
        });
      });

    axios.get('/api/about')
      .then(response => {
        this.setState({
          about: response.data
        });
      });
  }

  handleNewsClick(e) {
    var newNews = this.state.news;
    for (var i = 0; i < newNews.length; i++) {
      if(e.target.innerHTML === newNews[i].title || e.target.innerHTML === newNews[i].name || e.target.innerHTML === newNews[i].description) {
        newNews[i].views = Number(newNews[i].views) + 1;
        axios.put("/save", newNews[i])
          .then(response => {
            console.log('saved succesfully');
          });
        }
      }
    this.setState({
      news: newNews
    });
  }

  render() {
    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.state.about.id) {
        return item;
      }
    })
    return (
      <div className="news" onClick={this.handleNewsClick}>
        <div>
          {items.map((item, index) => {
            if (item !== undefined) {
              return <NewsList data={item} key={index} />
            }
          })}
        </div>
      </div>
    )
  }
}

export default News;
