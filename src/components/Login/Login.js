import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../useFormValidation';
import './Login.css';

function Login(props) {
  const visible = {opacity: '1'};
  const hidden = {opacity: '0'};
  const loginValidator = useFormWithValidation();

  const email = loginValidator.values.email;
  const password = loginValidator.values.password;

  const handleSubmit = (e) => {
    // Отменяем базовые действия при сабмите формы
    e.preventDefault();
    console.log(email, password)
    // Метод обработки логина
    props.onLogin(email, password);
  }
  return (
    <>
      <section className="login">
        <img className="login__logo" src={logo} alt="Логотип" />
        <h2 className="login__hello">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit} onChange={loginValidator.handleChange}>
          <label className="login__label">
            <p className="login__input-title">E-mail</p>
            <input
              className={`login__input ${!loginValidator.emailState && 'login__input_error'}`}
              type="email"
              id="email"
              name="email"
              required />

            <span style={loginValidator.emailState ? hidden : visible} className="login__error-input">{loginValidator.errors.email}</span>
          </label>
          <label className="login__label">
            <p className="login__input-title">Пароль</p>
            <input
              className={`login__input ${!loginValidator.passwordState && 'login__input_error'}`}
              type="password"
              id="password"
              name="password"
              minLength='8'
              required />

            <span className="login__error-input" style={loginValidator.passwordState ? hidden : visible}>{loginValidator.errors.password}</span>
          </label>
          <button className={`login__submit-button ${loginValidator.isValid && 'login__submit-button_active'}`} type="submit" disabled={!loginValidator.isValid}>Войти</button>
        </form>

        <div className="login__redirect-container">
          <p className="login__redirect-text">Ещё не зарегистрированы? <Link to="/signup" className="login__redirect-link">Регистрация</Link> </p>
        </div>
      </section>
    </>
  )
}

export default Login