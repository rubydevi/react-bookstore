import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    const newItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    dispatch(addBook({
      item_id: newItemId,
      title,
      author,
      category: 'Fiction',
    }));

    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button label="Add Book" onClick={handleAddBook} />
      </form>
    </div>
  );
};

export default AddBook;
