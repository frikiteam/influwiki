import React from 'react';
import {Link} from "react-router-dom";
import './profile.css'

const Profile = () => {
  return (
    <div className={'contenedor'}>
        <header className="header">
        <Link className= "boton" to="/explorer">Atras</Link>
        <Link to="/" title="ir a la pagina principal ">
          <img className="logo" src="../assets/img/Influwiki_Logo.png" alt="otra" />
        </Link>

      </header>
      <main className="contenido">
        <div className="content">
          <div className="content__img">
            <img src="../assets/img/foto_perfil.jpg" alt="Foto de Perfil"/>
          </div>
          <div className="content__title">
            <h1>Perfil del Influwiky</h1>
          </div>
        </div>
        <p>
          Maecenas pharetra pretium quam ut posuere. Quisque luctus sem purus. Phasellus vel nibh sed erat interdum placerat eget a dui. Vivamus viverra pharetra congue. Sed pretium mi eu dui congue pulvinar. Donec felis risus, malesuada quis tristique faucibus, vestibulum non urna. Fusce nec orci pulvinar, blandit velit quis, finibus neque. Mauris malesuada metus eget ornare pellentesque. Nunc pharetra ante eget ullamcorper finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla maximus a dolor non condimentum. Suspendisse convallis ullamcorper justo.
        </p>
        <h3>Lenguajes:</h3>
        <div className="img__lenguajes">
          <img src="../assets/img/Java-logo.png" alt="Logo Java"/>
          <img src="../assets/img/Js-logo.png" alt="Logo JavaScript"/>
        </div>

      </main>
      <aside className="sidebar">
        <div className="up">
          <i className="fab fa-facebook font-weight-bold">&nbsp;@Carandev</i>
                  <i className="fab fa-instagram-square font-weight-bold">&nbsp;@Carandev</i>
                  <i className="fab fa-twitter font-weight-bold">&nbsp;@Carandev</i>
        </div>
        <div className="down">
          <h3>Cursos Destacados</h3>
        </div>
      </aside>
    </div>
  );
};

export default Profile;
