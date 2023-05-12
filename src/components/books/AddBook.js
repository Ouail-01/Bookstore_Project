import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { apiAddBook } from '../../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const authorEdit = (e) => {
    setAuthor(e.target.value);
  };

  const titleEdit = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(apiAddBook({ id: uuidv4(), title, author }));
      e.target.reset();
    }
  };

  return (
    <>
      <hr />
      <div>
        <h3>Add A New Book</h3>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="Title" onChange={titleEdit} required />
          <input type="text" placeholder="author" onChange={authorEdit} required />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
