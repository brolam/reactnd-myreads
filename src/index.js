import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as BooksAPI from './BooksAPI'

ReactDOM.render(<App booksAPI={BooksAPI} />, document.getElementById('root'))
