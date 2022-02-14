import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

// components
import Searchbar from './Searchbar';

export default function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
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
