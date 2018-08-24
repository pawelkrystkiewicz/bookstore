import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({ adapter: new adapter() });
describe('Header test', () => {

    it('Header renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Header renders changes according to state', () => {
        const wrapper = shallow(<Header/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('h1').text()).toBe('Black Books');
        wrapper.setState({
        bookstoreName: "White Books"
        });
        expect(wrapper.find('h1').text()).toBe('White Books');
    })

    it("Header state changes after handleClick",()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper.state().bookstoreName.toBe("Black Books"));
    wrapper.find('.header').simulate('click');
    expect(wrapper.state().bookstoreName).toBe('White Books');
    })

})