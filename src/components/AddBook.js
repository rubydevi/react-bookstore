import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import { addBookAsync } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();

    const newItemId = uuidv4();

    if (title && author) {
      dispatch(addBookAsync({
        item_id: newItemId,
        title,
        author,
        category: 'Fantasy',
      }));

      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="add-book">
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form className="form-content">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button className="form-button" type="submit" label="Add Book" onClick={handleAddBook} />
      </form>
    </div>
  );
};

export default AddBook;
