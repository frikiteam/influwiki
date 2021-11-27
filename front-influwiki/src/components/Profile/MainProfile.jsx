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
            <h1>{user.name}</h1>
          </div>
        </div>
        <p>
          Maecenas pharetra pretium quam ut posuere. Quisque luctus sem purus. Phasellus vel nibh sed erat interdum placerat eget a dui. Vivamus viverra pharetra congue. Sed pretium mi eu dui congue pulvinar. Donec felis risus, malesuada quis tristique faucibus, vestibulum non urna. Fusce nec orci pulvinar, blandit velit quis, finibus neque. Mauris malesuada metus eget ornare pellentesque. Nunc pharetra ante eget ullamcorper finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla maximus a dolor non condimentum. Suspendisse convallis ullamcorper justo.
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
