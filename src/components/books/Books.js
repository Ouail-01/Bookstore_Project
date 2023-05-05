import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import Book1 from './Book';
import AddBook from './AddBook';

const Books = () => {
  const booksList = [];
  return (
    <>
      <main>
        <section>
          { booksList.map((book) => (
            <Book1
              key={generate({ charset: alphanumeric, length: 32 })}
              {...book}
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