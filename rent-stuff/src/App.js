import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Router/Home";
import Login from "./Router/Login";
import Register from "./Router/Register";
import Wylogowano from './Router/Wylogowano';
import LogInHome from "./components/LogInHome";


export default function App () {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/LogInHome/Wylogowano' element={<Wylogowano/>}/>
                <Route path='/LogInHome' element={<LogInHome/>}/>
            </Routes>
      </BrowserRouter>
  )
}
