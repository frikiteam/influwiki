import React from 'react';
import {Link} from "react-router-dom";

import headerPng from '../../assets/img/logo.png';

const HeaderNav = () => {
  return (
    <>
      <nav className="full-width container-barnav">
        <div className="bar_nav container x-auto full-width flex space-between">
          <Link to={'/'}>
            <img
              className="logo x-auto-mbl"
              src={headerPng}
              alt="Logotipo de InfluWiki"
            />
          </Link>
          <ul className="flex menu_bar y-center d-none">
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <Link to={'/Explorer'}>Explorar</Link>
            </li>
            <li>
              <a href="pages/login_form.html" className="btn-negative">
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
