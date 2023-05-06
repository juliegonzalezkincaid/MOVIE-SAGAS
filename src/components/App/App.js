import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie.jsx';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 

        {/* Movie list page */}
        <Route 
            path="/" exact>
            <MovieList />
        </Route>

        {/* Details Page */}
        <Route 
            exact path="/details/:id">
            <Details />
        </Route>
          
        {/* Add Movie Page */}
        {/* <Route 
            path="/addMovie/:id">
            <AddMovie />
        </Route> */}

      </Router>
    </div>
  );
}


export default App;
