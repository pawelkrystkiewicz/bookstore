import React from 'react';
import ReactDOM from 'react-dom';
import Order from './components/Order';
import { configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({ adapter: new adapter() });
describe('Order test', () => {

    it('Order renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Order/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Hello world renders', () => {
        const wrapper = shallow(<Order/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('Order');
    })
    it('Snapshot matches', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper).toMatchSnapshot();
    })


})