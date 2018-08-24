import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});
describe('App test', ()=>
{

it('App renders without a problem', ()=> {
    const div = doucment.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('Snapshot matches',() => {
    const wrapper=shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
})
})