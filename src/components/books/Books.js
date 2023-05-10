/* eslint-disable react/jsx-props-no-spreading */

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
          <Book1
            key={generate({ charset: alphanumeric, length: 32 })}
            {...booksList}
          />
        </section>
        <section>
          <AddBook />
        </section>
      </main>
    </>
  );
};

export default Books;
