import React from 'react';

const BOOK_SHELF_CHANGER_OPTIONS = {
    CURRENTLY_READING: 'currentlyReading',
    WANT_TO_READ: 'wantToRead',
    READ: 'read',
    NONE: 'none',
};

class BookShelfChanger extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value={BOOK_SHELF_CHANGER_OPTIONS.NONE} disabled>Move to...</option>
                    <option value={BOOK_SHELF_CHANGER_OPTIONS.CURRENTLY_READING}>Currently Reading</option>
                    <option value={BOOK_SHELF_CHANGER_OPTIONS.WANT_TO_READ}>Want to Read</option>
                    <option value={BOOK_SHELF_CHANGER_OPTIONS.READ}>Read</option>
                    <option value={BOOK_SHELF_CHANGER_OPTIONS.NONE}>None</option>
                </select>
            </div>
        );
    }
}
export default BookShelfChanger