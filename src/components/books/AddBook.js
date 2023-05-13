import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { apiAddBook } from '../../redux/books/booksSlice';
import '../../style/AddBook.css';

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
    <div className="form">
      <div className="Line" />
      <div>
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="Book Title" onChange={titleEdit} required />
          <input type="text" placeholder="Book Author" onChange={authorEdit} required />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
