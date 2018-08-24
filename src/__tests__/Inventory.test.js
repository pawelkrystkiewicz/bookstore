import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './components/Inventory';
import {configure} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({ adapter: new adapter() });
describe('Inventory test', () => {

    it('Inventory renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Hello world renders', () => {
        const wrapper = shallow(<Inventory/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('Inventory');
    }

    )


})