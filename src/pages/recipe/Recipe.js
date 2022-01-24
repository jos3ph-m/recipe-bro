import { useParams } from 'react-router-dom';

//styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();

  return <div>Recipe</div>;
}
