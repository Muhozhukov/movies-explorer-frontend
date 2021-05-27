import React from 'react';
import Header from '../Header/Header';
import './Profile.css';
import '../shared.css';

function Profile(props) {
  return (
    <>
      <Header></Header>
      <div className="profile__container">
        <h2 className="profile__hello">Привет, Виталий!</h2>
        <form className="profile__form">
          <label className="profile__label">
            <p className="profile__input-title">Имя</p>
            <input className="profile__input" type="text" required/>
          </label>
          <hr className="profile__brake-line" />
          <label className="profile__label">
            <p className="profile__input-title">E-mail</p>
            <input className="profile__input" type="email" />
          </label>
        </form>
        <div className="profile__buttons-container">
          <button className="profile__submit-button" type="submit">Редактировать</button>
          <button className="profile__exit-button">Выйти из аккаунта</button>
        </div>
      </div>
    </>
  )
}

export default Profile