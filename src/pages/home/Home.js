import { useFetch } from '../../hooks/useFetch';

//styles
import './Home.css';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  return <div className="home">{error && <p>{error}</p>}</div>;
}
