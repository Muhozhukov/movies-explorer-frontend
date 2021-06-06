import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import * as auth from '../../utils/auth';
function App() {
  // данные профиля
  const [currentUser, setCurrentUser] = React.useState('#');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  // Чекбокс на короткометражки
  const [checked, setChecked] = React.useState(false)
  const history = useHistory();
  function setCheckboxOn() {
    setChecked(true);
  }
  function setCheckboxOff() {
    setChecked(false);
  }
  function getJwt() {
    const jwt = localStorage.getItem('jwt');
    return jwt;
  }

  // Извлечение текущего адреса
  const currentPath = useLocation();

  // проверка токена
  const tokenCheck = React.useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // Получаем данные пользователя
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(currentPath.pathname);
          }
        })
        .catch(() => history.push('/signin'));
    }
  }, [history])

  // Метод обработки логина
  const handleLogin = (email, password) => {
    loading();
    return auth.authorize(email, password)
    .then(res => {
      loadingOver();
      if (res.token) {
        setLoggedIn(true);
        // Записываем полученный jwt токен в локальное хранилище
        localStorage.setItem('jwt', res.token);
        tokenCheck();
        history.push('/movies');
        getSavedMovies();
        api.getUserInfo(res.token)
          .then((res) => {
            setCurrentUser(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      loadingOver();
      console.log(err);
    });
  }

  // Метод регистрации
    const handleRegister = (name, email, password) => {
      loading()
      return auth.register(name, email, password)
      .then((res) => {
        loadingOver()
        handleLogin(email, password)
      })
      .catch((err) => {
        loadingOver()
        console.log(err);
      })
    }
  // logout пользователя
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/');
  }
  // обновление информации о профиле
  function handleUpdateUser(data) {
    const jwt = getJwt();
    api.editUserInfo(data, jwt)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // Загрузка массива фильмов
  React.useEffect(() => {
    moviesApi.getFilms()
      .then((res) => setMovies(res))
      .catch((err) => console.log(err))
  }, [])
  // Включение прелоадера
  function loading() {
    setIsLoading(true);
  }
  // Выключение прелоадера
  function loadingOver() {
    setIsLoading(false);
  }
  // Выдача найденного из массива фильма
  function searchMovie(data) {
    setSearchedMovies(data);
    const moviesToString = JSON.stringify(searchedMovies);
    localStorage.setItem('searchedMovies', moviesToString);
  }
  // Выдача найденного фильма из сохраненных фильмов
  function searchSavedMovie (data) {
    const localSearchedMovies = JSON.stringify(searchedSavedMovies)
    setSearchedSavedMovies(data);
    const moviesToString = localSearchedMovies;
    localStorage.setItem('searchedSavedMovies', moviesToString);
  }
  // Выдача фильмов из локалСторэдж, либо найденных
function showSearchedMovies() {
  const localSavedMovies = JSON.parse(localStorage.getItem('searchedSavedMovies'));
  if (searchedSavedMovies.length > 0) {
    return searchedSavedMovies;
  }
  else if (!localSavedMovies) {
    return savedMovies;
  } else if (localSavedMovies.length > 0) {
    return localSavedMovies;
  } else {
    return savedMovies;
  }
}
function showLocalStorageMovies() {
  const localSearchedMovies = JSON.parse(localStorage.getItem('searchedMovies'));
  if (!localSearchedMovies) {
    return [];
  } else if (localSearchedMovies.length > 0) {
    return localSearchedMovies;
  } else {
    return [];
  }
}
  // Сохранение фильма
  function saveMovie(movie) {
    const jwt = getJwt();
    api.saveMovie(movie, jwt)
      .then((res) => getSavedMovies())
      .catch((err) => console.log(err))
  }
  // Удаление фильма
  function deleteMovie(movieId) {
    console.log(movieId);
    const jwt = getJwt();
    api.deleteMovie(movieId, jwt)
      .then((res) => getSavedMovies())
      .catch((err) => console.log(err));
  }
  // Получение сохраненных фильмов
  function getSavedMovies() {
    const jwt = getJwt();
    if (jwt) {
      api.getSavedMovies(jwt)
        .then((res) => setSavedMovies(res))
        .catch((err) => console.log(err))
    }
  }
  React.useEffect(() => {
    getSavedMovies();
  }, []);
  React.useEffect(() => {
    const jwt = getJwt();
    if (jwt) {
      api.getUserInfo(jwt)
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err));
    };
  }, [])

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck])
  const header = true;
  return (
    <>
    <div className={`App ${isLoading ? 'App_dark' : 'App_normal'}`}>
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          header={header}
          checked={checked}
          setCheckboxOn={setCheckboxOn}
          setCheckboxOff={setCheckboxOff}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          searchMovie={searchMovie}
          movies={movies}
          searchedMovies={showLocalStorageMovies()}
          savedMovies={savedMovies}
          component={Movies}>
        </ProtectedRoute>
        <ProtectedRoute
          path="/saved-movies"
          savedMovies={savedMovies}
          checked={checked}
          setCheckboxOn={setCheckboxOn}
          setCheckboxOff={setCheckboxOff}
          movies={showSearchedMovies()}
          searchedSavedMovies={searchedSavedMovies}
          deleteMovie={deleteMovie}
          searchMovie={searchSavedMovie}
          loggedIn={loggedIn}
          header={header}
          component={SavedMovies}>
        </ProtectedRoute>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          data={currentUser.name}
          header={header}
          onUpdateUser={handleUpdateUser}
          signout={handleSignOut}
          component={Profile}>
        </ProtectedRoute>
        <Route path="/signup">
          <Register onRegister={handleRegister}></Register>
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin}></Login>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </CurrentUserContext.Provider>
    </div>
    <Preloader isLoading={isLoading} className='preloader' />
    </>
  );
}

export default App;
