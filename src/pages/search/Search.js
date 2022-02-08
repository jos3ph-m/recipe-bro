import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Search.css';

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;

  return <div>Search</div>;
}
