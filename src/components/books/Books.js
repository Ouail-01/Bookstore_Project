import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { apiFetchBook } from '../../redux/books/booksSlice';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(apiFetchBook());
  }, [dispatch]);

  return (
    <>
      <main>
        <section>
          {booksList.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))}
        </section>
        <section>
          <AddBook />
        </section>
      </main>
    </>
  );
};

export default Books;
