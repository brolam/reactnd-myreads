import React from 'react';
import BookSearch from '../BookSearch.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookSearch/>, div)
})