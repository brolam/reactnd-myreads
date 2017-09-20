import React from 'react'
import './App.css'
import BookShelfChanger from './components/BookShelfChanger.js';
import BookShelfImage from './components/BookShelfImage.js';
import BookShelf from './components/BookShelf.js';
import BookShelfList from './components/BookShelfList.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    this.props.booksAPI.getAll().then((books) => { this.setState({books})  })
  }

  onChangeBookShelf = () => {}
  render() {
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
                <input type="text" placeholder="Search by title or author"/>

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
               <BookShelfList listTitle="Currently Readin" books={this.state.books} onChangeBookShelf={this.onChangeBookShelf} />
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <BookShelf book={ {id:"nggnmAEACAAJ", title: "The Linux Command Line", authors: ["William E. Shotts", "Breno Marques" ], shelf:"currentlyReading"}} onChangeBookShelf={this.onChangeBookShelf} />
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="PGR2AwAAQBAJ" />
                            <BookShelfChanger selectedOption="currentlyReading" onChangeBookShelf={this.onChangeBookShelf} />
                          </div>
                          <div className="book-title">To Kill a Mockingbird</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="yDtCuFHXbAYC" />
                            <BookShelfChanger selectedOption="currentlyReading" onChangeBookShelf={this.onChangeBookShelf}/>
                          </div>
                          <div className="book-title">Ender's Game</div>
                          <div className="book-authors">Orson Scott Card</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="uu1mC6zWNTwC" />
                            <BookShelfChanger selectedOption="wantToRead" onChangeBookShelf={this.onChangeBookShelf}/>
                          </div>
                          <div className="book-title">1776</div>
                          <div className="book-authors">David McCullough</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="wrOQLV6xB-wC"/>
                            <BookShelfChanger selectedOption="wantToRead" onChangeBookShelf={this.onChangeBookShelf}/>
                          </div>
                          <div className="book-title">Harry Potter and the Sorcerer's Stone</div>
                          <div className="book-authors">J.K. Rowling</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="pD6arNyKyi8C" />
                            <BookShelfChanger selectedOption="read" onChangeBookShelf={this.onChangeBookShelf} />
                          </div>
                          <div className="book-title">The Hobbit</div>
                          <div className="book-authors">J.R.R. Tolkien</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <BookShelfImage bookId="1q_xAwAAQBAJ"/>
                            <BookShelfChanger selectedOption="read" onChangeBookShelf={this.onChangeBookShelf} />
                          </div>
                          <div className="book-title">Oh, the Places You'll Go!</div>
                          <div className="book-authors">Seuss</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                          <BookShelfImage bookId="32haAAAAMAAJ"/>
                              <BookShelfChanger selectedOption="read" onChangeBookShelf={this.onChangeBookShelf} />
                          </div>
                          <div className="book-title">The Adventures of Tom Sawyer</div>
                          <div className="book-authors">Mark Twain</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
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
