import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/booksSlice';
import '../styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <ul className="book-list load">
          <div className="loader" />
        </ul>
        <div className="horizontal-divider" />
        <AddBook />
      </>
    );
  }

  if (error) {
    return (
      <>
        <ul className="book-list">
          There is an issue:
          {error}
        </ul>
        <div className="horizontal-divider" />
        <AddBook />
      </>
    );
  }

  return (
    <>
      <ul className="book-list">
        {Object.entries(books).map(([itemId, book]) => (
          <Book
            key={itemId}
            category={book[0].category}
            bookName={book[0].title}
            author={book[0].author}
            itemId={itemId}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <AddBook />
    </>
  );
};

export default Books;
