import './components/Main/index.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/explorer'} element={<Explorer/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
