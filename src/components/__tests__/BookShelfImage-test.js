import React from 'react';
import BookShelfImage from '../BookShelfImage.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookShelfImage bookId="nggnmAEACAA" />, div)
})

test('Last Snapshot', () => {
    const bookShelfImage = renderer.create(
        <BookShelfImage bookId="nggnmAEACAA" />
      );
      let tree = bookShelfImage.toJSON();
      expect(bookShelfImage).toMatchSnapshot();
})
