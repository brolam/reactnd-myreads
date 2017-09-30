import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App.js'
import { mount } from 'enzyme';
import {BrowserRouter} from 'react-router-dom'

const SHELF_CURRENTLY_READING = 0;
const SHELF_WANT_TO_READ = 1
const SHELF_READ = 2;

const BooksAPIMock = {}
let wasBooksApiUpdateCalled = {};
BooksAPIMock.getAll = () => new Promise(function (then) {
  then(books);
});
BooksAPIMock.update = (book, shelf) => new Promise(function (then) {
  wasBooksApiUpdateCalled = {id:"nggnmAEACAAJ", shelf:"read"};
  for( const book of books  ){
    if ( book.id === wasBooksApiUpdateCalled.id){
      book.shelf = wasBooksApiUpdateCalled.shelf;
      then(wasBooksApiUpdateCalled);
      return;
    }
  }
});
BooksAPIMock.search = (query, maxResults) => new Promise(function (then) {
  const booksFound = books.filter((book) => (book.title.indexOf(query) > -1));
  then(booksFound);
});

let app;

beforeEach(() => {
  app = mount(<BrowserRouter><App booksAPI={BooksAPIMock} /></BrowserRouter>);
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><App booksAPI={BooksAPIMock} /></BrowserRouter>, div)
})

test('renders 3 list of bookshelf', () => {
  const innerNode = app.find('.bookshelf');
  expect(innerNode.length).toEqual(3);
})

test('renders 6 books', () => {
  app.setState({ books: books });
  const innerNode = app.find('.book');
  expect(innerNode.length).toEqual(6);
})

test('renders 2 books per BookShelfList', () => {
  const shelves = app.find('.bookshelf');
  const shelfCurrentlyReading = shelves.at(SHELF_CURRENTLY_READING);
  const shelfWantToRead = shelves.at(SHELF_WANT_TO_READ);
  const shelfRead = shelves.at(SHELF_READ);
  expect(shelfCurrentlyReading.find('.book').length).toEqual(2);
  expect(shelfWantToRead.find('.book').length).toEqual(2);
  expect(shelfRead.find('.book').length).toEqual(2);
})

test('Call BooksAPI Update method', () => {
  const testChangeCurrentlyReadingToRead = (app) => {
    app.update();
    const shelves = app.find('.bookshelf');
    const shelfCurrentlyReading = shelves.at(SHELF_CURRENTLY_READING);
    const shelfRead = shelves.at(SHELF_READ);
    expect(shelfCurrentlyReading.find('.book').length).toEqual(1);
    expect(shelfRead.find('.book').length).toEqual(3);
  }
  const bookShelfChanger = app.find('select [id="nggnmAEACAAJ"]'); //The Linux Command Line Book's
  bookShelfChanger.node.value = "read";
  bookShelfChanger.simulate('change');
  expect(wasBooksApiUpdateCalled).toEqual({id:"nggnmAEACAAJ", shelf:"read"});
  testChangeCurrentlyReadingToRead(app);
})

test('Show and Close search books', () => {
  const testWasShowBookSearch = (app) => {
    expect(app.find('.search-books').length).toEqual(1);
    expect(app.find('.bookshelf').length).toEqual(1);
  }
  const testWasCloseBookSearch = (app) => {
    expect(app.find('.search-books').length).toEqual(0);
    expect(app.find('.bookshelf').length).toEqual(3);
  }
  const testEmptyShelf = (app) => {
    expect(app.find('.book').length).toEqual(0);
  }
  const searchButton = app.find('a [id="searchButton"]');
  expect(searchButton.length).toEqual(1);
  searchButton.simulate('click');
  testWasShowBookSearch(app);
  testEmptyShelf(app);
  const closeSearchButton = app.find('a [id="closeSearchButton"]');
  expect(closeSearchButton.length).toEqual(1);
  closeSearchButton.simulate('click');
  testWasCloseBookSearch(app);
})

test('Search three books', () => {
  const testSearchWithEmptyQueryValue = () => {
    query.node.value = '';
    query.simulate('change');
    expect(app.find('.book').length).toEqual(0);
  }
  const searchButton = app.find('a [id="searchButton"]');
  searchButton.simulate('click');
  const query = app.find('input');
  query.node.value = 'The';
  query.simulate('change');
  expect(app.find('.bookshelf').length).toEqual(1);
  testSearchWithEmptyQueryValue();
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
  shelf: "currentlyReading"
},
{
  id: "yDtCuFHXbAYC",
  title: "Ender's Game",
  authors: ["Orson Scott Card", "Breno Marques"],
  shelf: "wantToRead"
},
{
  id: "uu1mC6zWNTwC",
  title: "1776",
  authors: ["David McCullough", "Breno Marques"],
  shelf: "wantToRead"
},
{
  id: "wrOQLV6xB",
  title: "Harry Potter and the Sorcerer's Stone",
  authors: ["J.K. Rowlingh", "Breno Marques"],
  shelf: "read"
},
{
  id: "pD6arNyKyi8C",
  title: "The Hobbit",
  authors: ["J.K. Rowlingh", "Breno Marques"],
  shelf: "read"
},
{
  id: "brenoNyKyi8C",
  title: "The Breno",
  authors: ["Breno Marques"],
  shelf: "none"
}
]