import React from 'react';
import PropTypes from 'prop-types'

function BookShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select id={props.bookId} value={props.selectedOption} onChange={props.onChangeBookShelf} >
                <option value="none" disabled >Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read" >Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookShelfChanger.propTypes = {
    bookId: PropTypes.string.isRequired,
    selectedOption: PropTypes.string.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
}
export default BookShelfChanger