import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Route, Switch } from 'react-router';

function App() {
  const header = true;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/movies">
          <Movies
            header={header}></Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            header={header}></SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile
            header={header}></Profile>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
