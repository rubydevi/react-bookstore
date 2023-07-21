import React from 'react';

const AddBook = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" id="txtName" placeholder="Book title" />
      <input type="text" id="txtAuthor" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
