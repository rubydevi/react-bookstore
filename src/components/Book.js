import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const Book = ({ bookName, author, onRemove }) => (
  <li>
    <h1>{bookName}</h1>
    <p>{author}</p>
    <Button label="Delete" onClick={onRemove} />
  </li>
);

Book.propTypes = {
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
