import React from "react";

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
                <a href="">Explorar</a>
              </li>
              <li>
                <a href="">Iniciar sesión</a>
              </li>
              <li>
                <a href="">Registrarme</a>
              </li>
              <li>
                <a href="">Recuperar contraseña</a>
              </li>
            </ul>
            <ul>
              <h3>Contacta con los creadores</h3>
              <li>
                <a href="">Brufeli</a>
              </li>
              <li>
                <a href="">Yesid</a>
              </li>
              <li>
                <a href="">Leonardo</a>
              </li>
              <li>
                <a href="">María</a>
              </li>
              <li>
                <a href="">Juan</a>
              </li>
              <li>
                <a href="">Carlos</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

  );
}
export default Footer;
