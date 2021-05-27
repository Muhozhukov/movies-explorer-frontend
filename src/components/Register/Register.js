import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {
  return (
    <>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип" />
        <h2 className="register__hello">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">
            <p className="register__input-title">Имя</p>
            <input className="register__input" type="text" required/>
            <span className="register__error-input">Что-то пошло не так</span>
          </label>
          <label className="register__label">
            <p className="register__input-title">E-mail</p>
            <input className="register__input" type="email" />
            <span className="register__error-input">Что-то пошло не так</span>
          </label>
          <label className="register__label">
            <p className="register__input-title">Пароль</p>
            <input className="register__input" type="password" />
            <span className="register__error-input">Что-то пошло не так</span>
          </label>
        </form>
        <button className="register__submit-button">Зарегистрироваться</button>
        <div className="register__redirect-container">
          <p className="register__redirect-text">Уже зарегистрированы? <Link to="/signin" className="register__redirect-link">Войти</Link></p>
        </div>
      </section>
    </>
  )
}

export default Register