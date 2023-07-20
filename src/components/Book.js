import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ bookName, author }) => (
  <li>
    <h1>{bookName}</h1>
    <p>{author}</p>
    <button type="button">Delete</button>
  </li>
);

Book.propTypes = {
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
