const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

const booksReduce = (state = [], action) => {
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
