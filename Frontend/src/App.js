import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Registerationsuccessful from "./Components/Registrationsuccessful";
import { Route,Routes } from "react-router-dom";
import LoginSuccesfull from "./Components/LoginSuccesfull";


function App() 
{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Registrationsuccessful" element={<Registerationsuccessful/>}/>
        <Route path="Loginsuccessful" element={<LoginSuccesfull/>}/>
      </Routes>
    </div>
  );
}

export default App;
