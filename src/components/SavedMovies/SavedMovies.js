import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
function Movies(props) {
  return (
    <>
      <Header
        opened={props.burgerMenuIsOpened}
        open={props.onOpenBurger}
        close={props.closeBurgerMenu}>
      </Header>
      <SearchForm
        movies={props.movies}
        savedMovies={props.savedMovies}
        setCheckboxOn={props.setCheckboxOn}
        setCheckboxOff={props.setCheckboxOff}
        searchSavedMovies={props.searchedSavedMovies}
        searchMovie={(movies) => props.searchMovie(movies)}></SearchForm>
      <MoviesCardList
        movies={props.movies}
        deleteMovie={props.deleteMovie}
        checked={props.checked}
        myFilm={true}></MoviesCardList>
      <Footer></Footer>
    </>
  )
}

export default Movies