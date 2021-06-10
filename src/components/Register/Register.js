import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../useFormValidation';
import './Register.css';

function Register(props) {
  const visible = {opacity: '1'};
  const hidden = {opacity: '0'};
  const registerValidator = useFormWithValidation();
  const name = registerValidator.values.name;
  const email = registerValidator.values.email;
  const password = registerValidator.values.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(name, email, password);
  }
  return (
    <>
      <section className="register">
        <img className="register__logo" src={logo} alt="Логотип" />
        <h2 className="register__hello">Добро пожаловать!</h2>
        <form onSubmit={handleSubmit} onChange={registerValidator.handleChange} className="register__form">
          <label className="register__label">
            <p className="register__input-title">Имя</p>
            <input
              className={`register__input ${!registerValidator.nameState && 'register__input_error'}`}
              type="text"
              id="name"
              name="name"
              required/>
            <span className="register__error-input" style={registerValidator.nameState ? hidden : visible}>{registerValidator.errors.name}</span>
          </label>
          <label className="register__label">
            <p className="register__input-title">E-mail</p>
            <input
              className={`register__input ${!registerValidator.emailState && 'register__input_error'}`}
              type="email"
              id="email"
              name="email"
              required />
            <span className="register__error-input" style={registerValidator.emailState ? hidden : visible}>{registerValidator.errors.email}</span>
          </label>
          <label className="register__label">
            <p className="register__input-title">Пароль</p>
            <input
              className={`register__input ${!registerValidator.passwordState && 'register__input_error'}`}
              type="password"
              id="password"
              name="password"
              required />
            <span className="register__error-input" style={registerValidator.passwordState ? hidden : visible}>{registerValidator.errors.password}</span>
          </label>
          <button className={`register__submit-button ${registerValidator.isValid && 'register__submit-button_active'}`} type="submit" disabled={!registerValidator.isValid}>Зарегистрироваться</button>
        </form>

        <div className="register__redirect-container">
          <p className="register__redirect-text">Уже зарегистрированы? <Link to="/signin" className="register__redirect-link">Войти</Link></p>
        </div>
      </section>
    </>
  )
}

export default Register