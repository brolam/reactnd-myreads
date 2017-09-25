import React from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js';

function BookSearch(props) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a id="closeSearchButton" className="close-search" onClick={() => { props.goHome()}}>Close</a>
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
                <BookShelf shelfTitle="Results" books={[]} onChangeBookShelf={props.onChangeBookShelf} />
            </div>
        </div>
    );
}

BookSearch.propTypes = {
    goHome: PropTypes.func.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default BookSearch