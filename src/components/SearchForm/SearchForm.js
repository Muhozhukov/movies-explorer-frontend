import React from 'react';
import { useRouteMatch } from "react-router-dom";
import './SearchForm.css';
import formSubmit from '../../images/form-submit.svg';
import formIcon from '../../images/form-icon.svg';

function SearchForm(props) {
  const checkboxInput = document.querySelector('.search-form__checkbox');
  const moviesMatch = useRouteMatch("/movies");
  const savedMoviesMatch = useRouteMatch("/saved-movies");
  // пустышка для заполнения данных пользователя
  const initialData = {
    movie: '',
  };
  const [data, setData] = React.useState(initialData);

  // подписка на изменение инпутов
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value,
    }));
  }
  // сброс формы
  const resetForm = () => {
    setData(initialData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSearchSavedMovies(data.movie);
    // Если поле movie пустое, то ничего не делаем
    if (moviesMatch) {
      handleSearchMovies(data.movie);
    } else if (savedMoviesMatch) {
      handleSearchSavedMovies(data.movie)
    }
    resetForm();
  }
  const handleSearchSavedMovies = (name) => {
    const valueFromInput = name.toLowerCase().split(' ').join('');
    const currentMovies = [];
    props.savedMovies.forEach((movie) => {
      const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
      const regexp = new RegExp(valueFromInput, 'igm');
      const match = regexp.test(oneStringName);
      if (match) {
        currentMovies.push(movie);
      }
    })
    console.log(currentMovies)
    props.searchMovie(currentMovies);
  }
  const handleSearchMovies = (name) => {
    const valueFromInput = name.toLowerCase().split(' ').join('');
    const currentMovies = [];
    if (checkbox()) {
      props.allMovies.forEach((movie) => {
        if (movie.duration > 40) {
          return
        } else {
          const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
          const regexp = new RegExp(valueFromInput, 'igm');
          const match = regexp.test(oneStringName);
          if (match) {
            currentMovies.push(movie);
          }
          props.searchMovie(currentMovies);
        }
      })
    } else {
      props.allMovies.forEach((movie) => {
        const oneStringName = movie.nameRU.toLowerCase().split(' ').join('');
        const regexp = new RegExp(valueFromInput, 'igm');
        const match = regexp.test(oneStringName);
        if (match) {
          currentMovies.push(movie);
          // props.searchMovie(currentMovies);
        }
      })
      props.searchMovie(currentMovies);
    }

  }

  function checkbox() {
    // const checkbox = document.querySelector('.search-form__checkbox');
    if (checkboxInput.checked) {
      return true;
    } else {
      return false;
    }
  }
  function checkboxStatus() {
    if (checkboxInput.checked) {
      props.setCheckboxOn()
    } else {
      props.setCheckboxOff()
    }
  }
  return (
    <>
      <div className="search-form__container">
        <div className="search-from__align-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <label className="search-form__flex-container">
              <img className="search-form-icon" src={formIcon} alt="Введите запрос" />
              <input
                className="search-form__input"
                type="text"
                id="movie"
                name="movie"
                value={data.movie}
                onChange={handleChange}
                placeholder="Фильм"
                autoComplete="off"
                required />
            </label>
            <button className="search-form__submit" type="submit">
              <img className="search-form__submit-icon" src={formSubmit} alt="Поиск" />
            </button>
          </form>
          <div className="search-form__checkbox-container">
            <div className="search-form__brake-line"></div>
            <label className="switch">
              <input className="search-form__checkbox" onChange={() => checkboxStatus()} type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p className="search-form__checkbox-text">Короткометражки</p>
          </div>
        </div>

        <hr className="search-form__horizontal-line"/>
       </div>
    </>
  )
}

export default SearchForm