import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App.js'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

const BooksAPIMock = {}

BooksAPIMock.getAll = () => new Promise(function (then) {
  then(books);
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App booksAPI={BooksAPIMock} />, div)
})

test('renders 3 list of bookshelf', () => {
  const app = mount(<App booksAPI={BooksAPIMock} />);
  const innerNode = app.find('.bookshelf');
  expect(innerNode.length).toEqual(3);
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
}
]