import React from 'react';
import BookShelfChanger from '../BookShelfChanger.js';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div')
    const component = renderer.create(<BookShelfChanger/>)
    ReactDOM.render(<BookShelfChanger/>, div)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
