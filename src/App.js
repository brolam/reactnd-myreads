import React from 'react'
import './App.css'
import BookShelfList from './components/BookShelfList.js';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    this.props.booksAPI.getAll().then((books) => { this.setState({ books }) })
  }
  onChangeBookShelf = (e) => {
    const { bookId, shelf } = [e.target.id, e.target.value];
    const book = { id: bookId };
    this.props.booksAPI.update(book, shelf);
  }
  getBooksOnTheShelf(shelf, books) {
    return books.filter((book) => (book.shelf === shelf))
  }
  render() {
    const { books } = this.state
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelfList listTitle="Currently Readin" books={this.getBooksOnTheShelf('currentlyReading', books)} onChangeBookShelf={this.onChangeBookShelf} />
                  <BookShelfList listTitle="Want to Read" books={this.getBooksOnTheShelf('wantToRead', books)} onChangeBookShelf={this.onChangeBookShelf} />
                  <BookShelfList listTitle="Read" books={this.getBooksOnTheShelf('read', books)} onChangeBookShelf={this.onChangeBookShelf} />
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
