import React from 'react'
import './App.css'
import BookShelves from './components/BookShelves.js';
import BookSearch from './components/BookSearch.js';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  GO_HOME = '/';
  GO_TO_SHEARCH = '/search';
  state = {
    books: []
  }
  updateAllShelves() {
    this.props.booksAPI.getAll().then((books) => { this.setState({ books }) })
  }
  componentDidMount() {
    this.updateAllShelves();
  }
  onChangeBookShelf = (e) => {
    const bookId = e.target.id;
    const shelf = e.target.value;
    const book = { id: bookId };
    this.props.booksAPI.update(book, shelf).then((result) => {
      this.updateAllShelves();
    });
  }
  getBooksOnTheShelf = (shelf) => {
    return this.state.books.filter((book) => (book.shelf === shelf))
  }

  render() {
    return (
      <div className="app">
        <Route exact path={this.GO_TO_SHEARCH} render={({ history }) => (
          <BookSearch 
          goHome={() => { history.push(this.GO_HOME) }} 
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
