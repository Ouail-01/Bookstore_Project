import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'John Smith',
  },
  {

    id: uuidv4(),
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
  {

    id: uuidv4(),
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
  },
];

const booksReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.book);
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADDBOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVEBOOK,
  book,
});

export default booksReduce;
