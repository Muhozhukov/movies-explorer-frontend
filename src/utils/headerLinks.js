import React from 'react';
import { NavLink } from 'react-router-dom';
import accIcon from '../images/header-acc-icon.svg';
import './headerLinks.css';

export default function headerLinks(links){
  if (!links) {
    return(
      <>
        <div className="header__links">
          <div className="header__links-container">
            <NavLink className="header__link-container header__link_hidden" exact to="/" activeClassName="header__link_active" style={{ textDecoration: 'none' }}>
              <p className="header__link">Главная</p>
            </NavLink>
            <NavLink className="header__link-container" to="/movies" activeClassName="header__link_active" style={{ textDecoration: 'none' }}>
              <p className="header__link">Фильмы</p>
            </NavLink>
            <NavLink className="header__link-container" to="/saved-movies" activeClassName="header__link_active" style={{ textDecoration: 'none' }}>
              <p className="header__link">Сохранённые фильмы</p>
            </NavLink>
          </div>
          <NavLink className="header__link-container" to="/profile" style={{ textDecoration: 'none' }}>
            <div className="header__accaunt">
              <img className="header__acc-icon" src={accIcon} alt="Аккаунт" />
              <p className="header__acc-text">Аккаунт</p>
            </div>
          </NavLink>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="promo__links">
        {/* <img className="header__logo" src={logo} alt="logo" /> */}
        <div className="promo__links-container">
          <NavLink className="promo__link-container" to="/signup">
            <p className="promo__signup">Регистрация</p>
          </NavLink>
          <NavLink className="promo__link-container" to="/signin">
            <div className="promo__signin-container">
              <p className="promo__signin">Войти</p>
            </div>
          </NavLink>
        </div>
        </div>
      </>
    )
  }}