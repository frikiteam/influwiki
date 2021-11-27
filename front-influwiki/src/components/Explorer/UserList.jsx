import React from 'react';
import {Link} from "react-router-dom";

const UserList = ({user}) => {
  return (
      <div className="caja_g">
        <div className="caja_a">
          <div className="header_card">
            <img src="/img/foto_perfil.jpg " alt="foto perfil"/>
            <h1>{user.name}</h1>
          </div>
          <div className="body_card">
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <Link className={'diseño_boton'} to={'/profile/' + user.id} >
          ver perfil
        </Link>
      </div>
  );
};

export default UserList;
