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
      <SearchForm></SearchForm>
      <MoviesCardList myFilm={true}></MoviesCardList>
      <Footer></Footer>
    </>
  )
}

export default Movies