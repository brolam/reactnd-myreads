import React from 'react';
import PropTypes from 'prop-types'

function BookImage(props) {
    return (
        <div className="book-cover" style={{ width: 120, height: 190, backgroundImage: `url("https://books.google.com/books/content?id=${props.bookId}&printsec=frontcover&img=1&zoom=1")` }}></div>
    )
}
BookImage.propTypes = {
    bookId: PropTypes.string.isRequired,
}
export default BookImage