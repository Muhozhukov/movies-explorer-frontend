import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList(props) {
  return (
    <>
      <section className="movies">
        <div className="movies__container">
          <MoviesCard myFilm={props.myFilm}></MoviesCard>
          <MoviesCard myFilm={props.myFilm}></MoviesCard>
          <MoviesCard myFilm={props.myFilm}></MoviesCard>
          <MoviesCard></MoviesCard>
          <MoviesCard></MoviesCard>
        </div>
        <button className="movies__more-button">Ещё</button>
      </section>
    </>
  )
}

export default MoviesCardList