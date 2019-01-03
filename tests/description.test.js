import { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Description from '../client/components/description.jsx';
import { fakeDescriptionData, handleClick } from './jestsetup.js'
import React from 'react';
import DescriptionInfoList from '../client/components/descriptionInfoList.jsx';
import styled from 'styled-components';


 // var body = document.createElement('body');
 //  document.body = body;
 //  var div = document.createElement('div');
 //  div.id = 'app'
 //  document.body.appendChild(div);

 //  // Mount React components
 //  ReactDOM.render(<Description/>, document.getElementById('app'));
 //  var Description = mount(<Description/>);


describe('description tests', () => {

  const wrapper = mount(<Description />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(34);
  });

  it('should render a classname about', () => {
    expect(wrapper.find('.about')).toBeDefined();
  });

  it('should render a minimized description', () => {
    expect(wrapper.find(
      <div className="about">
      {fakeDescriptionData.minimized}
      <a onClick={handleClick}> Read More</a>
      </div>))
  })

  it('should render read more', () => {
    expect(wrapper.find('.about').text()).toEqual(' Read More')
  })


   it('should render a full description', () => {
    wrapper.setState({
      open: true
    })
    expect(wrapper.find(
      <div className="about">
      {fakeDescriptionData.description}
      <a onClick={handleClick}> Read Less</a>
      </div>))
  })


  it('should render a read Less', () => {
    wrapper.setState({
      open: true
    })

    expect(wrapper.find('.about').text()).toEqual(' Read Less')
  })

});
