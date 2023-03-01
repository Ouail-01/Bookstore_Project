import { configureStore } from '@reduxjs/toolkit';
import categoriesReduce from './categories/categoriesSlice';
import booksReduce from './books/booksSlice';

const store = configureStore({
  reducer: {
    checkStatus: categoriesReduce,
    books: booksReduce,
  },
});

export default store;
