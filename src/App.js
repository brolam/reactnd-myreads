import React from 'react'
import './App.css'
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import {isBookObject} from './components/Book.js';
import {parseBookShelf} from './components/BookShelfChanger.js';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  GO_HOME = '/';
  GO_TO_SHEARCH = '/search';
  state = {
    books: [],
    booksFound:[]
  }
  syncAllShelves() {
    this.props.booksAPI.getAll().then((books) => { this.setState({ books }) })
  }
  componentDidMount() {
    this.syncAllShelves();
  }
  onChangeBookShelf = (e) => {
    const bookId = e.target.id;
    const shelf = e.target.value;
    const book = { id: bookId };
    this.props.booksAPI.update(book, shelf).then((result) => {
      this.syncAllShelves();
    });
  }
  getBooksOnTheShelf = (shelf) => {
    return this.state.books.filter((book) => (book.shelf === shelf))
  }
  parseAllBooksFound(booksFound){
    const parsedBooks = this.state.booksFound.filter((book) => {
      parseBookShelf(this.state.books, book);
      return isBookObject(book);
    });
    return parsedBooks;
  }
  search = (query) => {
    if (query === '') return;
    this.props.booksAPI.search(query, 20).then((result) => {
      if (Array.isArray(result)) {
        this.setState({ booksFound: result });
      }
    });
  };
  render() {
    return (
      <div className="app">
        <Route exact path={this.GO_TO_SHEARCH} render={({ history }) => (
          <BookSearch 
          booksFound={this.parseAllBooksFound()}
          goHome={() => { history.push(this.GO_HOME) }} 
          search={this.search}
          onChangeBookShelf={this.onChangeBookShelf} 
          />)}
        />
        <Route exact path={this.GO_HOME} render={({ history }) => (
          <BookShelves
            onChangeBookShelf={this.onChangeBookShelf}
            getBooksOnTheShelf={this.getBooksOnTheShelf}
            goToSearch={() => { history.push(this.GO_TO_SHEARCH) }}
          />)} 
        />
      </div>
    )
  }
}

export default BooksApp
