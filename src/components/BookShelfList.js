import React from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf.js';

class BookShelfList extends React.Component {
    render() {
        const { listTitle, books, onChangeBookShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{listTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return (
                                <BookShelf key={book.id} book={book} onChangeBookShelf={onChangeBookShelf} />
                            )
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

BookShelfList.propTypes = {
    listTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired,
}
export default BookShelfList