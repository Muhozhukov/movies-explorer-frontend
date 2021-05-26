import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import links from '../../utils/headerLinks';

function Header(props) {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = React.useState(false);

  function handleBurgerMenuOpener() {
    setIsBurgerMenuOpened(true);
  }
  function closeBurger() {
    setIsBurgerMenuOpened(false);
  }
  const style = props.isPromo && {backgroundColor: '#073042'}
  const toggle = () => {
    document.querySelector('.header__burger span').classList.toggle('active');
    if (isBurgerMenuOpened) {
      closeBurger();
    } else {
      handleBurgerMenuOpener();
      }
  }
  return (
    <header className="header" style={style}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className={`header__navigation ${props.isPromo && 'header__navigation_promo'} ${isBurgerMenuOpened && 'header__navigation_active'}`}>
          {links(props.links)}
        </nav>
        <div className={`header__burger ${props.isPromo && 'header__burger_hidden'} ${isBurgerMenuOpened && 'header__burger_fixed'}`} onClick={toggle}>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header