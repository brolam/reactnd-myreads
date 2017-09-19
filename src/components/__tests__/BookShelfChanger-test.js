import React from 'react';
import BookShelfChanger from '../BookShelfChanger.js';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';

const onBookShelfChange = () => {}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelfChanger selectedOption="none" onBookShelfChange={onBookShelfChange}/>, div)
})

test('set read option: currentlyReading', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="currentlyReading" onBookShelfChange={onBookShelfChange} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('currentlyReading');
});

test('set read option: wantToRead', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="wantToRead" onBookShelfChange={onBookShelfChange} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('wantToRead');
});

test('set read option: read', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="read" onBookShelfChange={onBookShelfChange} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('read');
});

test('set read option: none', () => {
    const bookShelfChanger = mount(<BookShelfChanger selectedOption="none" onBookShelfChange={onBookShelfChange} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('none');
});