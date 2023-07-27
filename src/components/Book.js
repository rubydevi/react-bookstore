import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import Button from './Button';
import CircularProgress from './CircularProgress';
import { removeBookAsync } from '../redux/books/booksSlice';
import '../styles/Book.css';

const Book = ({
  bookName, author, itemId, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <li>
      <section className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{bookName}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="buttons">
              <button className="button" type="button">Comments</button>
              <div className="divider" />
              <Button className="button" label="Delete" onClick={handleRemoveBook} />
              <div className="divider" />
              <button className="button" type="button">Edit</button>
            </div>
          </div>
          <CircularProgress />
        </div>
      </section>
    </li>
  );
};

Book.propTypes = {
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
