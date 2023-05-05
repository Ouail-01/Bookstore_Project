import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Books from './components/books/Books';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
    </Routes>
  </Router>
);

export default App;