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

    it('Header renders', () => {
        const wrapper = shallow(<Header/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('i').text()).toBe('Header');
    }

    )


})