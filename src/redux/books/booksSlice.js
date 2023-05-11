/* eslint-disable */
import axios from 'axios';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const FETCHBOOK = 'bookstore/books/FETCH_BOOK';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ojJtJCBCCctn1SyYmiqB/books';

const booksReduce = (state = [], action) => {
  
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.book.id);
    case FETCHBOOK:
      return action.book;
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

const fetchBook = (book) => ({
  type: FETCHBOOK,
  book,
});

export const apiFetchBook = () => async (dispatch) => {
  const books = await axios.get(BaseUrl);
  const booksFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(booksFetched));
};

export const apiRemoveBook = (id) => async (dispatch) => {
  await axios.delete(`${BaseUrl}/${id}`);
  dispatch(removeBook({ id }));
};

export const apiAddBook = (book) => async (dispatch) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Nonfiction',
  };
  await axios.post(BaseUrl, newBook);
  dispatch(addBook(book));
};

export default booksReduce;
