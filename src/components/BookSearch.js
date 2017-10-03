import React from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js';

function BookSearch(props) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    id="closeSearchButton"
                    className="close-search"
                    onClick={props.goHome}>
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={e => props.search(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookShelf
                    shelfTitle="Results"
                    books={props.booksFound}
                    onChangeBookShelf={props.onChangeBookShelf}
                />
            </div>
        </div>
    );
}

BookSearch.propTypes = {
    booksFound: PropTypes.array.isRequired,
    goHome: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default BookSearch