import React from 'react';
import './AboutProject.css';
import '../shared.css';

function AboutProject(props) {
  return (
    <>
      <div id="about" className="about__container">
        <h2 className="section__title">О проекте</h2>
        <hr className="section-line" />
        <div className="about__flex-container">
          <div className="about__describing">
            <h3 className="about__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__text">
              Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about__describing">
            <h3 className="about__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__text">
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно
              защититься.
            </p>
          </div>
        </div>
        <div className="about__timing">
          <div className="about__timing-frontend">
            <div className="about__timing-frontend-block">
              <p className="about__timing-text about__timing-text_hover">1 неделя</p>
            </div>
            <p className="about__timing-subtitle">Back-end</p>
          </div>
          <div className="about__timing-backend">
            <div className="about__timing-backend-block">
              <p className="about__timing-text about__timing-text_hover">4 недели</p>
            </div>
            <p className="about__timing-subtitle">Front-end</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutProject