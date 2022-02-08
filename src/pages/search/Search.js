import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Search.css';

export default function Search() {
  const queryString = useLocation();
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending}
    </div>
  );
}
