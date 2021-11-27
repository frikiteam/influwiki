import React from 'react';

const HeaderBody = () => {
  return (
    <>
      <div className="full-width full-height header-mbl">
        <div className="header-body container full-height x-auto flex space-between y-center wrap">
          <div className="text-ctn flex column">
            <h1>Cambia tu educación de una manera diferente</h1>
            <p>
              Conoce personas que te ayudarán en tu progreso de estudio en
              ocasiones totalmente gratis, ya sea por redes sociales o
              plataformas virtuales.
            </p>
            <a href="pages/user_form.html" className="btn green">
              Registrarme
            </a>
          </div>
          <img
            className="draw"
            src={'/img/header-draw.svg'}
            alt="Ilustración de estudiantes en las escaleras"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderBody;
