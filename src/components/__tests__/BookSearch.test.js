import React from 'react';
import BookSearch from '../BookSearch.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

const onChangeBookShelf = (e) => {}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookSearch goHome={() => {}} onChangeBookShelf={onChangeBookShelf}  />, div)
})

test('Has an empty shelf', () => {
    const testEmptyShelf = (bookSearch) => {
        expect(bookSearch.find('.book').exists()).toEqual(false)
    }
    const bookSearch = mount(<BookSearch goHome={() => {}} onChangeBookShelf={onChangeBookShelf}  />);
    expect(bookSearch.find('.bookshelf').exists()).toEqual(true)
    testEmptyShelf(bookSearch);
})