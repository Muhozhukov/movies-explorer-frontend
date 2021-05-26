import React from 'react';
import './Techs.css';
import '../shared.css';

function Techs(props) {
  return (
    <>
      <div className="techs__container">
        <div className="techs__width-container">
          <h3 className="section__title">Технологии</h3>
          <hr className="section-line" />
          <h4 className="techs__title">7 технологий</h4>
          <p className="techs__subtitle">На курсе веб-разработки
          мы освоили технологии, которые применили в
          дипломном проекте.</p>
          <ul className="techs__techs-blocks">
            <li className="techs__block"><p className="techs__block-text">HTML</p></li>
            <li className="techs__block"><p className="techs__block-text">CSS</p></li>
            <li className="techs__block"><p className="techs__block-text">JS</p></li>
            <li className="techs__block"><p className="techs__block-text">React</p></li>
            <li className="techs__block"><p className="techs__block-text">Git</p></li>
            <li className="techs__block"><p className="techs__block-text">Express.js</p></li>
            <li className="techs__block"><p className="techs__block-text">MongoDB</p></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Techs