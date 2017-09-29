import React from 'react';
import BookShelfChanger  from '../BookShelfChanger.js';
import {parseBookShelf}  from '../BookShelfChanger.js';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

const onChangeBookShelf = () => { }

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="none" onChangeBookShelf={onChangeBookShelf} />, div)
})

test('set read option: currentlyReading', () => {
    const bookShelfChanger = mount(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="currentlyReading" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('currentlyReading');
});

test('set read option: wantToRead', () => {
    const bookShelfChanger = mount(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="wantToRead" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('wantToRead');
});

test('set read option: read', () => {
    const bookShelfChanger = mount(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="read" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('read');
});

test('set read option: none', () => {
    const bookShelfChanger = mount(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="none" onChangeBookShelf={onChangeBookShelf} />);
    const select = bookShelfChanger.find('select');
    expect(select.node.value).toEqual('none');
});

test('simulate change option', () => {
    const testOnSelectOption = (testOption) => {
        const onChangeBookShelf = (e) => {
            const bookId = e.target.id;
            const changeValue = e.target.value;
            expect(bookId).toEqual('nggnmAEACAA');
            expect(changeValue).toEqual(testOption);
        }
        const bookShelfChanger = mount(<BookShelfChanger bookId="nggnmAEACAA" selectedOption="none" onChangeBookShelf={onChangeBookShelf} />);
        bookShelfChanger.find('select').node.value = testOption;
        bookShelfChanger.find('select').simulate('change');
    };
    testOnSelectOption("currentlyReading");
    testOnSelectOption("wantToRead");
    testOnSelectOption("read");
    testOnSelectOption("none");
});

test('Last Snapshot', () => {
    const bookShelfChanger = renderer.create(
        <BookShelfChanger bookId="nggnmAEACAA" selectedOption="none" onChangeBookShelf={onChangeBookShelf} />
    );
    let tree = bookShelfChanger.toJSON();
    expect(tree).toMatchSnapshot();
})

test('Parse Book on the Shelf but with shelf not defined', () => {
    let bookOnTheShelf = {id: "nggnmAEACAAJ" };
    parseBookShelf(books, bookOnTheShelf);
    expect(bookOnTheShelf.shelf).toEqual('currentlyReading');
})

test('Parse Book with the shelf not defined', () => {
    let bookWithoutShelf = {id: "XXXXXXXX" };
    parseBookShelf(books, bookWithoutShelf);
    expect(bookWithoutShelf.shelf).toEqual('none');
})

const books = [{
    id: "nggnmAEACAAJ",
    shelf: "currentlyReading"
  },
]
  