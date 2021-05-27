import React from 'react';
import './Portfolio.css';
import linkImage from '../../images/link-image.svg';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__link-container">
          <a  href="https://muhozhukov.github.io/how-to-learn/" target="blank" className="portfolio__link-name">Статичный сайт</a>
          <img className="portfolio__link-image" src={linkImage} alt="ссылка" />
        </div>
        <hr className="portfolio__brake-line" />
        <div className="portfolio__link-container">
          <a  href="https://muhozhukov.github.io/russian-travel/index.html"
          target="blank" className="portfolio__link-name">Адаптивный сайт</a>
          <img className="portfolio__link-image" src={linkImage} alt="ссылка" />
        </div>
        <hr className="portfolio__brake-line" />
        <div className="portfolio__link-container">
          <a  href="https://muhozhuk.nomoredomains.club/" target="blank" className="portfolio__link-name">Одностраничное приложение</a>
          <img className="portfolio__link-image" src={linkImage} alt="ссылка" />
        </div>
        <hr className="portfolio__brake-line" />
      </div>
    </section>
  )
}

export default Portfolio