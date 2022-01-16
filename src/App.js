import { BrowserRouter, Switch, Route } from 'react-router-dom';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
