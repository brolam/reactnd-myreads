import React from 'react';
import BookShelf from '../BookShelf.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

const linuxBook = {
    id:"nggnmAEACAAJ",
    title: "The Linux Command Line",
    authors: ["William E. Shotts", "Breno Marques" ],
    subtitle:"A Complete Introduction",
    shelf:"currentlyReading"
}
const onChangeBookShelf = () => {}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelf book={linuxBook} onChangeBookShelf={onChangeBookShelf} />, div)
})

test('Last Snapshot', () => {
    const bookShelf = renderer.create(
        <BookShelf book={linuxBook} onChangeBookShelf={onChangeBookShelf} />
    );
    let tree = bookShelf.toJSON();
    expect(tree).toMatchSnapshot();
})