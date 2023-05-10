import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const booksList = useSelector((state) => state.books);

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
