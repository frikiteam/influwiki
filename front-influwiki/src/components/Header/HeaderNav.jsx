import React from 'react';
import {Link} from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <nav className="full-width container-barnav">
        <div className="bar_nav container x-auto full-width flex space-between">
          <Link to={'/'}>
            <img
              className="logo x-auto-mbl"
              src={'/img/logo.png'}
              alt="Logotipo de InfluWiki"
            />
          </Link>
          <ul className="flex menu_bar y-center d-none">
            <li>
              <a href="#about">Sobre Nosotros</a>
            </li>
            <li>
              <Link to={'/explorer'}>Explorar</Link>
            </li>
            <li>
              <Link className={'btn-negative'} to={'/login'}>Iniciar Sesión</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;
