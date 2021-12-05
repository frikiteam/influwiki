import React, {useEffect, useState} from 'react';
import './profile.css'
import HeaderProfile from "../components/Profile/HeaderProfile";
import MainProfile from "../components/Profile/MainProfile";
import AsideProfile from "../components/Profile/AsideProfile";
import {useParams} from "react-router-dom";
import {getUser} from "../services/UsuarioService";

const Profile = () => {
  let { id } = useParams()

  let [user, setUser] = useState({})

  useEffect(() => {
    getUser(id, setUser)
  }, [id])

  return (
    <div className={'contenedor'}>
      <HeaderProfile/>
      <MainProfile user={user}/>
      <AsideProfile user={user}/>
    </div>
  );
};

export default Profile;
