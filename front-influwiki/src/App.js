import './index.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";
import {getUsers} from "./services/UsuarioService";

const App = () => {

  let [users, setUsers] = useState([])


  useEffect(() => {
    getUsers(setUsers)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/explorer'} element={<Explorer users={users}/>}/>
          <Route path={'/profile/:id'} element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
