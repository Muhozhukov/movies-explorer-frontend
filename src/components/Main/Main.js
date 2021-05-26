import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import { NavTab } from '../../utils/headerLinks';
function Main(props) {
  const isPromo = true;
  const links = true;
  return (
    <>
      <Header isPromo={isPromo} links={links}></Header>
      <Promo>
      </Promo>
      <AboutProject>
      </AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  )
}

export default Main