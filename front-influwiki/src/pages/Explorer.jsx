import React from "react";
import './Explorer.css'
import UserList from "../components/Explorer/UserList";
import HeaderNav from "../components/Header/HeaderNav";

const Explorer = ({users}) => {
  return (
    <>
      <HeaderNav/>
      <main className={'main_explorer'}>
        {users.map(user => <UserList user={user} key={user.id}/>)}
      </main>
    </>
  )
}

export default Explorer