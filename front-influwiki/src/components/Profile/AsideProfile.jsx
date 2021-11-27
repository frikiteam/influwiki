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
            @{user.username}
          </a>
          <a href={'https://instagram.com/' + user.username} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon icon={faInstagram}/>
            @{user.username}
          </a>
          <a href={'https://twitter.com/' + user.username} target={'_blank'} rel={'noreferrer'}>
            <FontAwesomeIcon icon={faTwitter}/>
            @{user.username}
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
