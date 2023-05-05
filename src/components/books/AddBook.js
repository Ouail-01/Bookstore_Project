import React from 'react';

const AddBook = () => (
  <>
    <hr />
    <div>
      <h3>Add A New Book</h3>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="author" required />
        <button type="button">Add Book</button>
      </form>
    </div>
  </>
);

export default AddBook;
