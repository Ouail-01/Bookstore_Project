/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Books from './components/books/Books';
import store from './redux/configureStore';

const App = () => (
  <>
  <Provider store={store}>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>
  </Provider>
  </>
);

export default App;
