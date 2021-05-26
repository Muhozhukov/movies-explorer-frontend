import React from 'react';
import './Promo.css';
import landingLogo from '../../images/landingLogo.svg';

function Promo(props) {
  return (
    <div className="Promo">
      <div className="promo__container">
        <div className="promo__flex-container">
          <h1 className="promo__title">Учебный проект студента факультета <br className="promo__title-brake" />
            Веб-разработки.</h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать
            больше про этот проект и его создателя.
          </p>
          <a className="promo__button-container" href="#about">
            <button className="promo__button">Узнать больше</button>
          </a>
        </div>
        <img className="promo__landing-logo" src={landingLogo} alt="Логотип веб-страницы" />
      </div>
    </div>
  )
}

export default Promo