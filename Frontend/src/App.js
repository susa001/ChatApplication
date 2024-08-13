import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Registerationsuccessful from "./Components/Registrationsuccessful";
import { Route,Routes } from "react-router-dom";


function App() 
{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Registrationsuccessful" element={<Registerationsuccessful/>}/>

      </Routes>
    </div>
  );
}

export default App;
