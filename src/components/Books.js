import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (title, author) => {
    const newItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    dispatch(addBook({
      item_id: newItemId,
      title,
      author,
      category: 'Fiction',
    }));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <>
      <ul className="book-list">
        {books.map((book) => (
          <Book
            key={book.item_id}
            bookName={book.title}
            author={book.author}
            onRemove={() => handleRemoveBook(book.item_id)}
          />
        ))}
      </ul>
      <AddBook onAddBook={handleAddBook} />
    </>
  );
};

export default Books;
