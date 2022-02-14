import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// styles
import './Navbar.css';

// components
import Searchbar from './Searchbar';

export default function Navbar() {
  const {} = useContext(ThemeContext);
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Bro</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
