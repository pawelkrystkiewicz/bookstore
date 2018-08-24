import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './components/AdminPanel';
import { configure } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({ adapter: new adapter() });
describe('AdminPanel', () => {

    it('AdminPanel renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('AdminPanel', () => {
        const wrapper = shallow(<AdminPanel/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('div').text()).toBe('AdminPanel');
   })

    it('Snapshot matches', () => {
        const wrapper = shallow(<AdminPanel/>);
        expect(wrapper).toMatchSnapshot();
    })


})