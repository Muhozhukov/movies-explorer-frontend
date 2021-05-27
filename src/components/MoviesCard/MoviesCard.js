import React from 'react';
import { useRouteMatch } from "react-router-dom";
import './MoviesCard.css';
import randomPic from '../../images/student-photo.jpeg';
import savedMovieicon from '../../images/movie-saved-icon.svg';
import deleteMovieIcon from '../../images/delete-movie-icon.svg';
function MoviesCard(props) {
  const visible = {display: 'block'};
  const hidden = {display: 'none'};
  const match = useRouteMatch("/movies");

  function movieIcon() {
    if (props.myFilm && match) {
      return savedMovieicon
    } else if (props.myFilm) {
      return deleteMovieIcon
    }
  };

  function movieSaveButton() {
    if (!props.myFilm && match) {
      return visible
    } else {
      return hidden
    }
  }

  return (
    <div className="movie-card">
      <img className="movie-card__image" src={randomPic} alt="123" />
      <button
        style={movieSaveButton()}
        className="movie-card__save-button">Сохранить</button>
      <img
        className="movie-card__saved-icon"
        style={props.myFilm ? visible : hidden}
        src={movieIcon()}
        alt="Фильм сохранён"
      />
      <div className="movie-card__description">
        <h3 className="movie-card__title">Операция "Ы" и другие приключения Шурика</h3>
        <div className="movie-card__duration-container">
          <p className="movie-card__duration">1ч 17м</p>
        </div>
      </div>
    </div>
  )

}

export default MoviesCard;