import React from 'react';
import {Link} from "react-router-dom";

const HeaderProfile = () => {
  return (
    <>
      <header className="header_profile">
        <Link className= "boton" to="/explorer">Atras</Link>
        <Link to="/" title="ir a la pagina principal ">
          <img
              className="logo"
              src={'/img/Influwiki_Logo.png'}
              alt="Logotipo" />
        </Link>

      </header>
    </>
  );
};

export default HeaderProfile;
