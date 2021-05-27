import React from 'react';
import '../shared.css';
import './AboutMe.css';
import photo from '../../images/student-photo.jpeg';
function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h3 className="section__title">Студент</h3>
        <hr className="section-line" />
        <div className="about-me__flex-container">
          <div className="about-me__author">
            <h4 className="about-me__name">Никита</h4>
            <h5 className="about-me__subtitle">Фронтенд-разработчик,
            24 года</h5>
            <p className="about-me__description">Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл
            курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.</p>
            <div className="about-me__links">
              <a className="about-me__link" href="https://vk.com/nmonteg" target="blank">VK</a>
              <a className="about-me__link" href="https://github.com/Muhozhukov" target="blank">Github</a>
            </div>
          </div>
          <img className="about-me__picture" src={photo} alt="Фото студента"/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe