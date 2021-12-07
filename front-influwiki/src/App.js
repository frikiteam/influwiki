import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from './pages/Login';

import './index.css';
import './App.css';
import UsuarioService from "./services/UsuarioService";

const App = () => {

  let [users, setUsers] = useState([])

  useEffect(() => {
    UsuarioService.getUsers(setUsers)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/explorer'} element={<Explorer users={users}/>}/>
          <Route path={'/profile/:id'} element={<Profile/>}/>
          <Route path={'/register'} element ={<Register />}/>
          <Route path={'/login'} element ={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
