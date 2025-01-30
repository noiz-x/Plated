import './App.css';
import RecipesList from './pages/RecipesList';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';
import VerifyEmail from './pages/VerifyEmail';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content bg-slate-200'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/recipes">
              <RecipesList />
            </Route>
            <Route path="/recipes/new">
              <CreateRecipe />
            </Route>
            <Route path="/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/verify-email/:key">
              <VerifyEmail />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>    
      </div>
    </Router>
  );
}

export default App;
