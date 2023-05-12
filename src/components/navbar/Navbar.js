import { Link } from 'react-router-dom';
import '../../style/Navbar.css';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
