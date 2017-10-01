import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App.js'
import { mount } from 'enzyme';
import {BrowserRouter} from 'react-router-dom'

const BooksAPIMock = {}
BooksAPIMock.getAll = () => new Promise(function (then) {
  then(books);
});
BooksAPIMock.update = (book, shelf) => new Promise(function (then) {
  let bookShelfChanged = book.id === "nggnmAEACAAJ"? books[0] : booksFound[0];
  if ( bookShelfChanged.id === "new_book") books.push(bookShelfChanged);
  if (bookShelfChanged){
    bookShelfChanged.shelf = shelf;
    then({id:book.id, shelf});
  } 
});

let books = [{
  id: "nggnmAEACAAJ",
  title: "The Linux Command Line",
  authors: ["William E. Shotts", "Breno Marques"],
  shelf: "wantToRead"
}];

let booksFound = [{
  id: "new_book",
  title: "New Book",
  authors: ["Breno Marques"],
  shelf: "none"
}];
let app = mount(<BrowserRouter><App booksAPI={BooksAPIMock} /></BrowserRouter>);
app.setState({ books, booksFound });

describe('Change and add books on the shelves ', () => {

  it('There is a book on the shelf', () => {
    let booksOntheShelf = app.find('.book');
    expect(booksOntheShelf.length).toEqual(1);
  })

  it('Reading a book', () => {
    const select = app.find('.book').find('select');
    select.node.value = 'currentlyReading';
    select.simulate('change');
    expect(app.state().books[0].shelf).toEqual('currentlyReading');
  })

  it('Read a book', () => {
    const select = app.find('.book').find('select');
    select.node.value = 'read';
    select.simulate('change');
    expect(app.state().books[0].shelf).toEqual('read');
  })

  it('Want to read a book', () => {
    const select = app.find('.book').find('select');
    select.simulate('change',  { target: { id:'new_book', value: 'wantToRead' } });
    app.update();
    expect(app.state().books[1].shelf).toEqual('wantToRead');
  })

  it('Have two books', () => {
    expect(app.find('.book').length).toEqual(2);
  })

})
