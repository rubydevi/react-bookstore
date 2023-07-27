import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import Button from './Button';
import { removeBookAsync } from '../redux/books/booksSlice';

const Book = ({ bookName, author, itemId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <li>
      <h1>{bookName}</h1>
      <p>{author}</p>
      <Button label="Delete" onClick={handleRemoveBook} />
    </li>
  );
};

Book.propTypes = {
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
