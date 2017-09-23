import React from 'react'
import './App.css'
import BookShelfList from './components/BookShelfList.js';
import BookSearch from './components/BookSearch.js';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
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
  getBooksOnTheShelf(shelf, books) {
    return books.filter((book) => (book.shelf === shelf))
  }
  render() {
    const { books } = this.state
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch/>
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
