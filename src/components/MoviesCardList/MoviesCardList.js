import React from 'react';
import { useRouteMatch } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const savedMoviesMatch = useRouteMatch("/saved-movies");
  // количество отображаемых фильмов при поиске
  const [index, setIndex] = React.useState(12);
  // определение разрешения экрана
  const isMobile = () => {
    if (window.innerWidth < 767) {
      return true
    } else {
      return false
    }
  }
  const isTablet = () => {
    if (window.innerWidth < 1280) {
      return true
    } else {
      return false
    }
  }
  const isDesctop = () => {
    if (window.innerWidth > 1280) {
      return true
    } else {
      return false
    }
  }
  function downloadMovies() {

    if (isMobile()) {
      setIndex(index + 2);
    } else if (isTablet()) {
      setIndex(index + 2)
    } else if (isDesctop()) {
      setIndex(index + 3);
    }
  }
  React.useEffect(() => {
    if (isMobile()) {
      setIndex(5);
    } else if (isTablet()) {
      setIndex(8);
    } else {
      setIndex(12);
    }
  }, []);

  // eslint-disable-next-line array-callback-return
  const moviesList = props.movies.map((movie, i) => {
      while (i < index) {
        if (props.checked && movie.duration > 40) {
          return [];
        } else {
          console.log(movie)
          return (<MoviesCard
          savedMovies={props.savedMovies}
          movie={movie} key={savedMoviesMatch ? movie.movieId : movie.id}
          movies={props.movies}
          saveMovie={(data) => props.saveMovie(data)}
          deleteMovie={(movieId) => props.deleteMovie(movieId)}
          onCardImageClick={props.onCardImageClick} />)}
        };
  });

  function showMoreButton() {
    const hidden = {display: 'none'};
    if (moviesList.length < index) {
      return hidden
    }
  }
  function showNotFoundTitle() {
    const hidden = {display: 'none'};
    const visible = {display: 'block'}
    if (moviesList.length > 0) {
      return hidden
    } else {
      return visible;
    }
  }
  return (
    <>
      <section className="movies">
        <h2 style={showNotFoundTitle()} className="movies__not-finding-title">По вашему запросу ничего не найдено</h2>
        <div className="movies__container">
        {moviesList}
        </div>
        <button style={showMoreButton()} className="movies__more-button" onClick={() => downloadMovies()}>Ещё</button>
      </section>
    </>
  )
}

export default MoviesCardList