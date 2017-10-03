import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book.js';

function BookShelf(props) {
    const { shelfTitle, books, onChangeBookShelf } = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => {
                        return (
                            <Book
                                key={book.id}
                                book={book}
                                onChangeBookShelf={onChangeBookShelf}
                            />
                        )
                    })}
                </ol>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}

export default BookShelf