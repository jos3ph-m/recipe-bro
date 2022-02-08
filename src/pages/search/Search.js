import { useLocation } from 'react-router-dom';

//styles
import './Search.css';

export default function Search() {
  const queryString = useLocation();
  return <div>Search</div>;
}
