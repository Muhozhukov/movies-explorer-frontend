import React from 'react';
import './SearchForm.css';
import formSubmit from '../../images/form-submit.svg';
import formIcon from '../../images/form-icon.svg';

function SearchForm(props) {
  return (
    <>
      <div className="search-form__container">
        <div className="search-from__align-container">
          <form className="search-form">
            <label className="search-form__flex-container">
              <img className="search-form-icon" src={formIcon} alt="Введите запрос" />
              <input className="search-form__input" type="text" name="movie" placeholder="Фильм" autoComplete="off" required />
            </label>
            <button className="search-form__submit" type="submit">
              <img className="search-form__submit-icon" src={formSubmit} alt="Поиск" />
            </button>
          </form>
          <div className="search-form__checkbox-container">
            <div className="search-form__brake-line"></div>
            <label className="switch">
              <input type="checkbox" />
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