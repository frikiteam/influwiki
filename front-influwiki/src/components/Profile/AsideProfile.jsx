import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";


const AsideProfile = ({ user }) => {
  return (
    <>
      <aside className="sidebar">
        <div className="up">
          <a href={'https://facebook.com'} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon icon={faFacebook}/>
            @{user.sobre_nombre}
          </a>
          <a href={'https://instagram.com/' + user.sobre_nombre} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon icon={faInstagram}/>
            @{user.sobre_nombre}
          </a>
          <a href={'https://twitter.com/' + user.sobre_nombre} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon icon={faTwitter}/>
            @{user.sobre_nombre}
          </a>
        </div>
        <div className="down">
          <h3>Cursos Destacados</h3>
        </div>
      </aside>
    </>
  );
};

export default AsideProfile;
