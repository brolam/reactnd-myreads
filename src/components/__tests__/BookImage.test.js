import React from 'react';
import BookImage from '../BookImage.js';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

test('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BookImage bookId="nggnmAEACAA" />, div)
})

test('Last Snapshot', () => {
    const bookImage = renderer.create(
        <BookImage bookId="nggnmAEACAA" />
      );
      let tree = bookImage.toJSON();
      expect(bookImage).toMatchSnapshot();
})