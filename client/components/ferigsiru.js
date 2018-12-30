import React from 'react';
import axios from 'axios';
import Description from './description.jsx';
import News from './news.jsx';
import styled from 'styled-components';
import DescriptionInfoList from './descriptionInfoList.jsx';


//   const div = styled.h2 `
//   font-size: 26px;
//   font-weight: 500;
//   letter-spacing: -0.14px;
//   line-height: 30px;
//   margin: 0;
//   display: block;
//   margin-block-start: 0.83em;
//   margin-block-end: 0.83em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   color: #f5f5dc;
// `;

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

  handleSubmit() {
    axios.put('/api/news')
  }



  render() {
  console.log(this)
    var items = this.state.news.map((item, index) => {
      if (item.about_id === this.state.about.id) {
        return item;
      }
    })
    return (
      <div>
        <div>About</div>
          <div className="description">
            <div>
              {this.state.about.description}
            </div>
            <DescriptionInfoList data={this.state.about} />
          </div>
        <div>News</div>
          <div className="news">
            <News data={items} />
          </div>
      </div>
    )
  }
}

export default App;


// <div>
//         <div>
//           <About>About</About>
          <div className="description">
            <div>
              {this.state.about.description}
            </div>
            <DescriptionInfoList data={this.state.about} />
          </div>
//             <News data={items} />
//         </div>
//       </div>