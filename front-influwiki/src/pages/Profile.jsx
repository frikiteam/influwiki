import React, {useEffect, useState} from 'react';
import './profile.css'
import HeaderProfile from "../components/Profile/HeaderProfile";
import MainProfile from "../components/Profile/MainProfile";
import AsideProfile from "../components/Profile/AsideProfile";
import {useParams} from "react-router-dom";

const Profile = ({data}) => {
  let { id } = useParams()

  let [user, setUser] = useState({})

  useEffect(() => {
    for (const datum of data){
      if (datum.id == id){
        setUser(datum)
      }
    }
  }, [])

  console.log(user)

  return (
    <div className={'contenedor'}>
      <HeaderProfile/>
      <MainProfile user={user}/>
      <AsideProfile user={user}/>
    </div>
  );
};

export default Profile;
