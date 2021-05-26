import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound(props) {
  const hystory = useHistory();
  function goBackHystory() {
    hystory.goBack();
  }
  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__position-container">
          <h1 className="not-found__title">404</h1>
          <h3 className="not-found__subtitle">Страница не найдена</h3>
        </div>
        <button className="not-found__link-back" onClick={goBackHystory} >Назад</button>
      </div>
    </section>
  )
}

export default NotFound