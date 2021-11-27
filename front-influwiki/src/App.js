import './index.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Profile from "./pages/Profile";
import {useEffect, useState} from "react";

const App = () => {

  let [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/explorer'} element={<Explorer data={data}/>}/>
          <Route path={'/profile/:id'} element={<Profile data={data}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
