import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
  return (
    <>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <h2 className="login__hello">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__label">
            <p className="login__input-title">E-mail</p>
            <input className="login__input" type="email" />

            <span className="login__error-input">Что-то пошло не так...</span>
          </label>
          <label className="login__label">
            <p className="login__input-title">Пароль</p>
            <input className="login__input" type="password" />

            <span className="login__error-input">Что-то пошло не так...</span>
          </label>
        </form>
        <button className="login__submit-button">Войти</button>
        <div className="login__redirect-container">
          <p className="login__redirect-text">Ещё не зарегистрированы? <Link to="/signup" className="login__redirect-link">Регистрация</Link> </p>
        </div>
      </section>
    </>
  )
}

export default Login