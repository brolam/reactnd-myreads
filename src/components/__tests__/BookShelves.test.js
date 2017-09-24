import React from 'react';
import BookShelves from '../BookShelves.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


const onChangeBookShelf = (e) => {}
const getBooksOnTheShelf = (shelf) => { return books.filter((book) => (book.shelf === shelf))}

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BookShelves  
    onChangeBookShelf={onChangeBookShelf}
    getBooksOnTheShelf={getBooksOnTheShelf}
    goToSearch={() => { }} />, div)
})

test('Last Snapshot', () => {
    const bookShelves = renderer.create(
        <BookShelves  
        onChangeBookShelf={onChangeBookShelf}
        getBooksOnTheShelf={getBooksOnTheShelf}
        goToSearch={() => { }} />
      );
      let tree = bookShelves.toJSON();
      expect(bookShelves).toMatchSnapshot();
})

const books = [{
    id: "nggnmAEACAAJ",
    title: "The Linux Command Line",
    authors: ["William E. Shotts", "Breno Marques"],
    shelf: "currentlyReading"
  },
  {
    id: "PGR2AwAAQBAJ",
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee", "Breno Marques"],
    shelf: "wantToRead"
  },
  {
    id: "yDtCuFHXbAYC",
    title: "Ender's Game",
    authors: ["Orson Scott Card", "Breno Marques"],
    shelf: "read"
  }
]