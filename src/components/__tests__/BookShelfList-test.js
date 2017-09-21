import React from 'react';
import BookShelfList from '../BookShelfList.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

const books = [{
    id: "nggnmAEACAAJ",
    title: "The Linux Command Line",
    authors: ["William E. Shotts", "Breno Marques"],
    shelf: "currentlyReading"},
    {
    id: "PGR2AwAAQBAJ",
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee", "Breno Marques"],
    shelf: "currentlyReading"}
]

const onChangeBookShelf = () => { }

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelfList listTitle="Currently Readin" books={books} onChangeBookShelf={onChangeBookShelf} />, div)
})

test('renders 2 books', () => {
    const bookShelfList = mount(<BookShelfList listTitle="Currently Readin" books={books} onChangeBookShelf={onChangeBookShelf} />);
    const booksOnTheShelf = bookShelfList.find('.book');
    expect(booksOnTheShelf.length).toEqual(2);
  })

test('Last Snapshot', () => {
    const bookShelfList = renderer.create(
        <BookShelfList listTitle="Currently Readin" books={books} onChangeBookShelf={onChangeBookShelf} />
    );
    let tree = bookShelfList.toJSON();
    expect(tree).toMatchSnapshot();
})