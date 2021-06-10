import React from 'react';
import { useRouteMatch } from "react-router-dom";
import './MoviesCard.css';
import noImage from '../../images/no-image.png';
import savedMovieicon from '../../images/movie-saved-icon.svg';
import deleteMovieIcon from '../../images/delete-movie-icon.svg';
function MoviesCard(props) {

  const visible = {display: 'block'};
  const hidden = {display: 'none'};

  const moviesMatch = useRouteMatch("/movies");
  const savedMoviesMatch = useRouteMatch("/saved-movies");

  const movieURL = props.movie.image ? `https://api.nomoreparties.co${props.movie.image.url}` : noImage
  const savedMovieURL = props.movie.image ? props.movie.image : noImage;
  // const isSavedMovie = props.movie.owner._id === userInfo._id;

  function savedMoviesIds() {
    if (moviesMatch) {
      return props.savedMovies.map((item) => {
      return item.movieId;
      })
    }
  }

  const sameMovieId = () => savedMoviesIds().some((id) => {
    return props.movie.id === id;
    }
  )
  const isMovieSaved = () => {
    if (moviesMatch && sameMovieId()) {
      return true
    } else if (savedMoviesMatch) {
      return true
    }
  }

  // отображение постера фильма
  function moviePicture() {
    if (moviesMatch) {
      return movieURL
    } else if (savedMoviesMatch) {
      return savedMovieURL
    }
  }
  function movieIcon() {
    if (moviesMatch && isMovieSaved()) {
      return savedMovieicon
    } else if (savedMoviesMatch) {
      return deleteMovieIcon
    }
  };
  function movieIconVisibility() {
    if (moviesMatch && isMovieSaved()) {
      return visible
    } else if (savedMoviesMatch) {
      return visible
    } else {
      return hidden
    }
  }
  function movieSaveButton() {
    if ((moviesMatch && isMovieSaved()) || savedMoviesMatch) {
      return hidden
    } else {
      return visible
    }
  }
  function movieTrailer() {
    if (moviesMatch) {
      return props.movie.trailerLink;
    } else if (savedMoviesMatch) {
      return props.movie.trailer;
    }
  }
  function movieDuration() {
    const duration = props.movie.duration;
    if (duration < 60) {
      return `${duration} м`
    } else {
      const hours = Math.floor(duration / 60);
      const minutes = duration - hours * 60;
      return `${hours} ч ${minutes} м`
    }
  }
  function deleteMovie() {
    if (moviesMatch) {
      // eslint-disable-next-line array-callback-return
      props.savedMovies.map((item) => {
        if (item.movieId === props.movie.id) {
          props.deleteMovie(item._id)
        }
      })
    } else if (savedMoviesMatch) {
      props.deleteMovie(props.movie._id)
    }
  }
  return (
    <div className="movie-card">
      <a href={movieTrailer()} target="blank">
        <img className="movie-card__image" src={moviePicture()} alt={props.movie.nameRU} />
      </a>
      <button
        style={movieSaveButton()}
        className="movie-card__save-button"
        onClick={() => props.saveMovie(props.movie)}>Сохранить</button>
      <img
        className="movie-card__saved-icon"
        style={movieIconVisibility()}
        src={movieIcon()}
        onClick={() => deleteMovie()}
        alt="Фильм сохранён"
      />
      <div className="movie-card__description">
        <h3 className="movie-card__title">{props.movie.nameRU}</h3>
        <div className="movie-card__duration-container">
          <p className="movie-card__duration">{movieDuration()}</p>
        </div>
      </div>
    </div>
  )

}

export default MoviesCard;