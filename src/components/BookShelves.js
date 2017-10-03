import React from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js';

function BookShelves(props) {
    const { getBooksOnTheShelf, onChangeBookShelf, goToSearch } = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        shelfTitle="Currently Readin"
                        books={getBooksOnTheShelf('currentlyReading')}
                        onChangeBookShelf={onChangeBookShelf}
                    />
                    <BookShelf
                        shelfTitle="Want to Read"
                        books={getBooksOnTheShelf('wantToRead')}
                        onChangeBookShelf={onChangeBookShelf}
                    />
                    <BookShelf
                        shelfTitle="Read"
                        books={getBooksOnTheShelf('read')}
                        onChangeBookShelf={onChangeBookShelf}
                    />
                </div>
            </div>
            <div className="open-search">
                <a id="searchButton" onClick={goToSearch}>Add a book</a>
            </div>
        </div>
    )
}

BookShelves.propTypes = {
    getBooksOnTheShelf: PropTypes.func.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
    goToSearch: PropTypes.func.isRequired,
}

export default BookShelves