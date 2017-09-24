import React from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger.js';
import BookShelfImage from './BookShelfImage.js';

class Book extends React.Component {
    render() {
        const { book, onChangeBookShelf } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <BookShelfImage bookId={book.id} />
                        <BookShelfChanger bookId={book.id} selectedOption={book.shelf} onChangeBookShelf={onChangeBookShelf} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors.map(function callback(author, index, authors) {
                            const separated = index > 0 ? '' : ','
                            return `${author}${separated} `
                        })}
                    </div>
                </div>
            </li>
        );
    }
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

export default Book