import React from 'react';
import axios from 'axios';
import DescriptionInfoList from './descriptionInfoList.jsx';
import News from './news.jsx';
import styled from 'styled-components';


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
      about: [],
      news: [],
      minimized: '',
      maximized: '',
      open: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/about')
      .then(response => {
        console.log(response.data)
        var split = response.data.description.split('.');
        var min = split[0] + '. ' + split[1] + '.'
        this.setState({
          about: response.data,
          minimized: min
        });
      });

    axios.get('/api/news')
      .then(response => {
        this.setState({
          news: response.data
        });
      });
    console.log(this.state)
  }

  // handleSubmit() {
  //   axios.put('/api/news')
  // }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }


  render() {
  console.log(this.state)
    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.state.about.id) {
        return item;
      }
    })

    return (
      <div>
      <div className="aboutShow">
        <Heading >About</Heading>
        <Show>Show More</Show>
        </div>
          <div className="description">
            <div>
              {this.state.open ?
                <div>
                  {this.state.about.description}
                  <Show onClick={this.handleClick}> Read Less</Show>
                </div> :
                <div>
                  {this.state.minimized}
                  <Show onClick={this.handleClick}> Read More</Show>
                </div>
              }
              </div>
            <DescriptionInfoList data={this.state.about} />
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

