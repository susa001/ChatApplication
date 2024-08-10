import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { Route,Routes } from "react-router-dom";


function App() 
{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
