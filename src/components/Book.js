import React from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger.js';
import BookImage from './BookImage.js';

function Book(props) {
    const { book, onChangeBookShelf } = props
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <BookImage bookId={book.id} />
                    <BookShelfChanger
                        bookId={book.id}
                        selectedOption={book.shelf}
                        onChangeBookShelf={onChangeBookShelf}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
    }),
    onChangeBookShelf: PropTypes.func.isRequired
}

export const isBookObject = (book) => {
    return (book.id && book.title && book.authors) ? true : false;
}

export default Book