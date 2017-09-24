import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as BooksAPI from './BooksAPI'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App booksAPI={BooksAPI} /></BrowserRouter>, document.getElementById('root'))
