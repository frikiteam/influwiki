import './pages/index/index.css';
import './App.css';
//importar bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';

import { IndexMain } from './pages/index/indexMain';
import { Footer } from './pages/footer/footer';

//img
import headerPng from './assets/img/logo.png';
import headerDrawSVG from './assets/img/header-draw.svg'

function App() {
  return (
    <>
      <header className="space-between">
        <nav className="full-width container-barnav">
          <div className="bar_nav container x-auto full-width flex space-between">
            <img
              className="logo x-auto-mbl"
              src={headerPng}
              alt="Logotipo de InfluWiki"
            />
            <ul className="flex menu_bar y-center d-none">
              <li>
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#explorer">Explorar</a>
              </li>
              <li>
                <a href="pages/login_form.html" className="btn-negative">
                  Iniciar Sesión
                </a>
              </li>
            </ul>
          </div>
        </nav>
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
              src={headerDrawSVG}
              alt="Ilustración de estudiantes en las escaleras"
            />
          </div>
        </div>
      </header>

     {/* componentes*/}
      <IndexMain/>
      <Footer/>
    </>
  );
}

export default App;
