import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <h1>Recipe Bro</h1>
        </Link>
      </nav>
    </div>
  );
}
