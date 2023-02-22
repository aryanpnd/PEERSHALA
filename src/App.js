import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import './App.css';
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home";
import Achievements from "./Dashboard/Achievements/Achievements";
import Myprofile from "./Dashboard/MyProfile/Myprofile";
import Myteam from "./Dashboard/MyTeam/Myteam";

function App() {
  return (
    <div className="App font-serif">
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="" element={<Myprofile />}/>
            <Route path="achieve" element={<Achievements />}></Route>
            <Route path="myteam" element={<Myteam />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
