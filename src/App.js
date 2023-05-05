import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';
import Books from './components/books/Books';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;