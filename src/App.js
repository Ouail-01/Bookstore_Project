import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/books/Books';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Books />} />
    </Routes>
  </Router>
);

export default App;