import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import News from '../client/components/news.jsx';

// describe('app tests', () => {

//   const wrapper = mount(<App />);

//   it('should render a <div />', () => {
//     expect(wrapper.find('div').length).toEqual(8);
//   });

//   it('should render a classname about', () => {
//     expect(wrapper.find('.aboutShow')).toBeDefined();
//   });

//   it('should render a show more button', () => {
//     expect(wrapper.find(<a onClick={this.handleInfoClick}>Show Less</a>))
//   })

//   it('should render read more', () => {
//     expect(wrapper.find('.aboutShow').text()).toEqual(' Show More')
//   })


//    it('should render a show Less button', () => {
//     wrapper.setState({
//       open: true
//     })
//     expect(wrapper.find(
//      <a onClick={this.handleInfoClick}>Show Less</a>))
//   })


//   it('should render a read Less', () => {
//     wrapper.setState({
//       open: true
//     })

//     expect(wrapper.find('.aboutShow').text()).toEqual(' Show Less')
//   })

// });
