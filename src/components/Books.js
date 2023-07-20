import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <>
    <ul>
      <Book bookName="The Hunger Games" author="Suzanne Collins" />
      <Book bookName="Dune" author="Frank Herbert" />
      <Book bookName="Capital in the Twenty-First Century" author="Suzanne Collins" />
    </ul>
    <AddBook />
  </>
);

export default Books;
