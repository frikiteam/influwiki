import React from 'react';

const MainProfile = ({ user }) => {
  return (
    <>
      <main className="contenido">
        <div className="content">
          <div className="content__img">
            <img src="/img/foto_perfil.jpg" alt="Foto de Perfil"/>
          </div>
          <div className="content__title">
            <h1>{user.nombres} {user.apellidos}</h1>
          </div>
        </div>
        <p>
          {user.descripcion_contenido}
        </p>
        <h3>Lenguajes:</h3>
        <div className="img__lenguajes">
          <img src="/img/Java-logo.png" alt="Logo Java"/>
          <img src="/img/Js-logo.png" alt="Logo JavaScript"/>
        </div>

      </main>
    </>
  );
};

export default MainProfile;
