import { combineReducers } from 'redux';
import categoriesReduce from './categories/categoriesSlice';
import booksReduce from './books/booksSlice';

export default combineReducers({
  categoriesReduce,
  booksReduce,
});