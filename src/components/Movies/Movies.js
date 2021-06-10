import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';
function Movies(props) {
  return (
    <>
      <Header></Header>
      <SearchForm
        allMovies={props.movies}
        setCheckboxOn={props.setCheckboxOn}
        setCheckboxOff={props.setCheckboxOff}
        getFilms={(data) => props.getFilms(data)}
        searchMovie={(movies) => props.searchMovie(movies)}></SearchForm>
      <MoviesCardList
        movies={props.searchedMovies}
        checked={props.checked}
        searchedMovies={props.searchedMovies}
        savedMovies={props.savedMovies}
        deleteMovie={props.deleteMovie}
        saveMovie={(movie) => props.saveMovie(movie)}
        myFilm={true}></MoviesCardList>
      <Footer></Footer>
    </>
  )
}

export default Movies