import React from 'react';
import {Link} from "react-router-dom";

const UserList = ({user}) => {
  return (
    <Link to={'/profile'} >
      <h3>{user.name}</h3>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </Link>
  );
};

export default UserList;
