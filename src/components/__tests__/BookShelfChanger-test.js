import React from 'react';
import BookShelfChanger from '../BookShelfChanger.js';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';

const onChangeBookShelf = () => {}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelfChanger selectedOption="none" onChangeBookShelf={onChangeBookShelf}/>, div)
})

test('set read option: currentlyReading', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="currentlyReading" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('currentlyReading');
});

test('set read option: wantToRead', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="wantToRead" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('wantToRead');
});

test('set read option: read', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="read" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('read');
});

test('set read option: none', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="none" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('none');
});