import React from 'react';
import './MoviesCard.css';
import randomPic from '../../images/student-photo.jpeg';
import savedMovieicon from '../../images/movie-saved-icon.svg';
import deleteMovieIcon from '../../images/delete-movie-icon.svg';
function MoviesCard(props) {
      return (
    <div className="movie-card">
      <img className="movie-card__image" src={randomPic} alt="123" />
      <img className="movie-card__saved-icon" src={props.myFilm ? deleteMovieIcon : savedMovieicon} alt="Фильм сохранён" />
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