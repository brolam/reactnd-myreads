import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App.js'


const BooksAPIMock = {}

BooksAPIMock.getAll = () => new Promise(function(then) {
  then([]);
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App booksAPI={BooksAPIMock} />, div)
})