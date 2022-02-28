import { projectFirestore } from '../../firebase/config';
import { useEffect } from 'react';

//styles
import './Home.css';

//components
import RecipeList from '../../components/RecipeList';

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
