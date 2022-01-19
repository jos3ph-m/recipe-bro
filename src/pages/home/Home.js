import { useFetch } from '../../hooks/useFetch';

//styles
import './Home.css';

export default function Home() {
  const { data, isPending, error } = useFetch();
  return <div>Home</div>;
}
