import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (

      <footer className="full-width">
        <div className="flex container x-auto space-between y-center wrap column">
          <img
            className="logo"
            src={'/img/logo.png'}
            alt="Logotipo de Influwiki"
          />
          <nav className="nav-footer flex space-between full-height y-center column">
            <ul>
              <li>
                <Link to="/explorer">Explorar</Link>
              </li>
              <li>
                <Link to="/login">Iniciar sesión</Link>
              </li>
              <li>
                <Link to="/register">Registrarme</Link>
              </li>
            </ul>
            <ul>
              <h3>Contacta con los creadores</h3>
              <li>
                <Link to='/contact'>Friki Team</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

  );
}
export default Footer;
