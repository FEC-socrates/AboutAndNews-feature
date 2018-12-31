import React from 'react';
import axios from 'axios';
import News from './news.jsx';
import styled from 'styled-components';
import Description from './description.jsx';


const Heading = styled.h2 `
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  margin: 0;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #f5f5dc;
`;

const Show = styled.a `
  color: #21ce99;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      about: [],
      open: false
    }
    this.handleInfoClick = this.handleInfoClick.bind(this);
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

  handleInfoClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.state.about.id) {
        return item;
      }
    })


    return (
      <div>
      <div className="aboutShow">
        <Heading >About</Heading>
          {this.state.open ?
            <Show onClick={this.handleInfoClick}>Show Less</Show> :
            <Show onClick={this.handleInfoClick}>Show More</Show> }
        </div>
          <div className="description">
            <Description open={this.state.open}/>
          </div>
        <Heading>News</Heading>
          <div className="news">
            <News data={items} />
          </div>
      </div>
    )
  }
}

export default App;
