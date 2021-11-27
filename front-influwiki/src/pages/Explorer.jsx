import React, {useEffect, useState} from "react";
import UserList from "../components/Explorer/UserList";
import HeaderNav from "../components/Header/HeaderNav";

const Explorer = () => {
  
  let [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <>
      <HeaderNav/>
      {data.map(user => <UserList user={user}/>)}
    </>
  )
}

export default Explorer