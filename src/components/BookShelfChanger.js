import React from 'react';
import PropTypes from 'prop-types'

function BookShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select value={props.selectedOption} onChange={props.onBookShelfChange} >
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
    selectedOption: PropTypes.string.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
}
export default BookShelfChanger