import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

//styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;

  const { error, isPending, data: recipe } = useFetch(url);

  return <div>Recipe</div>;
}
