import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <hr className="footer__brake-line" />
        <div className="footer__requisites">
          <p className="footer__copyright">&#169; 2021</p>
          <ul className="footer__links">
              <li className="footer__link-container">
                <a className="footer__link"
                  href="https://praktikum.yandex.ru/"
                  target="blank">Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-container">
                <a className="footer__link"
                  href="https://github.com/Muhozhukov" target="blank">Github
                </a>
              </li>
              <li className="footer__link-container">
                <a className="footer__link"
                  href="https://vk.com/nmonteg" target="blank">Vk
                </a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer