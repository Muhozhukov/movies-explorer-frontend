import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import '../shared.css';
import { useFormWithValidation } from '../useFormValidation';

function Profile(props) {

  const profileFormValidator = useFormWithValidation()
  const userInfo = React.useContext(CurrentUserContext);
  const visible = {opacity: '1'};
  const hidden = {opacity: '0'};
  // React.useEffect(() => {
  //     profileFormValidator.setValues({...profileFormValidator.values, name: userInfo.name});
  //     profileFormValidator.setValues({...profileFormValidator.values, email: userInfo.email || ''});
    // }, [userInfo]);

  function handleSubmit(e) {
      // Запрещаем браузеру переходить по адресу формы
      e.preventDefault();
      const name = profileFormValidator.values.name;
      const email = profileFormValidator.values.email;
      // Передаём значения управляемых компонентов во внешний обработчик
      props.onUpdateUser({
        name,
        email,
      });
    }
  return (
    <>
      <Header></Header>
      <div className="profile__container">
        <h2 className="profile__hello">Привет, {props.data}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} onChange={profileFormValidator.handleChange}>
          <label className="profile__label-container">
            <div className="profile__label">
              <p className="profile__input-title">Имя</p>
              <input
                className={`profile__input ${!profileFormValidator.nameState && 'profile__input_error'}`}
                id="name"
                name="name"
                type="text"
                value={profileFormValidator.values.name}
                required/>
            </div>
            <span
              className="profile__error-input"
              style={profileFormValidator.nameState ? hidden : visible}>
                {profileFormValidator.errors.name}
            </span>
          </label>
          <hr className="profile__brake-line" />
          <label className="profile__label-container">
            <div className="profile__label">
              <p className="profile__input-title">E-mail</p>
              <input
                className={`profile__input ${!profileFormValidator.emailState && 'profile__input_error'}`}
                type="email"
                id="email"
                name="email"
                value={profileFormValidator.values.email} />
            </div>
            <span
              className="profile__error-input"
              style={profileFormValidator.emailState ? hidden : visible}>
                {profileFormValidator.errors.email}
            </span>
          </label>
          <button className={`profile__submit-button ${profileFormValidator.isValid && 'profile__submit-button_active'}`} type="submit" disabled={!profileFormValidator.isValid}>Редактировать</button>
        </form>
        <div className="profile__buttons-container">
          <button className="profile__exit-button" onClick={props.signout}>Выйти из аккаунта</button>
        </div>
      </div>
    </>
  )
}

export default Profile