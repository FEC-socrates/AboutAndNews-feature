import React from 'react';
import styled from 'styled-components';
import DescriptionInfoList from './descriptionInfoList.jsx';
import axios from 'axios';

const Show = styled.a `
  color: #21ce99;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 19px;
  margin: 0;
`;


class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: [],
      minimized: '',
      maximized: '',
      open: false,
      openInfo: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
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
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }


  render() {
    return (
      <div>
        <div>
          {this.state.open ?
            <div>
            <div className="about">
              {this.state.about.description}
              <Show onClick={this.handleClick}> Read Less</Show>
              </div>
            </div>  :
            <div>
            <div className="about">
              {this.state.minimized}
              <Show onClick={this.handleClick}> Read More</Show>
              </div>
            </div>
          }
        </div>
          <DescriptionInfoList
          open={this.props.open}
          handleClick={this.handleInfoClick}
          data={this.state.about}
          />
      </div>
    )
  }
}

export default Description;
