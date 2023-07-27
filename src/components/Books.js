import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        There is an issue:
        {error}
      </div>
    );
  }

  return (
    <>
      <ul className="book-list">
        {Object.entries(books).map(([itemId, book]) => (
          <Book
            key={itemId}
            bookName={book[0].title}
            author={book[0].author}
            itemId={itemId}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;
