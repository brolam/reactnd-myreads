import React from 'react';
import BookSearch from '../BookSearch.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

const onChangeBookShelf = (e) => { };
let wasCalledSearch = false;
let wasSearchForLinuxValue = '';
const search = (query) => {
    wasCalledSearch = true;
    wasSearchForLinuxValue = query;
};

let bookSearch;
beforeEach(() => {
    bookSearch = mount(<BookSearch booksFound={[]} goHome={() => { }} search={search} onChangeBookShelf={onChangeBookShelf} />);
});

test('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookSearch booksFound={[]} goHome={() => { }} search={search} onChangeBookShelf={onChangeBookShelf} />, div)
})

test('Has an empty shelf', () => {
    const testEmptyShelf = (bookSearch) => {
        expect(bookSearch.find('.book').exists()).toEqual(false)
    }
    expect(bookSearch.find('.bookshelf').exists()).toEqual(true)
    testEmptyShelf(bookSearch);
})

test('Call search Linux value on input change', () => {
    const testSearchForLinuxValue = () => {
        expect(wasSearchForLinuxValue).toEqual('Linux');
    }
    bookSearch.find('input').node.value = 'Linux';
    bookSearch.find('input').simulate('change');
    expect(wasCalledSearch).toEqual(true);
    testSearchForLinuxValue();
})
