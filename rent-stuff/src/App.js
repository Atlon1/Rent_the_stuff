import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Router/Home";
import Login from "./Router/Login";
import Register from "./Router/Register";
import Wylogowano from './Router/Wylogowano';
import UserLoginInHome from "./Router/UserLoginInHome";
import FormSectionLogged from "./Router/FormSectionLogged";



export default function App () {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/UserLoginInHome' element={<UserLoginInHome/>}/>
                <Route path='/Wylogowano' element={<Wylogowano/>}/>
                <Route path='/UserLoginInHome/FormSection' element={<FormSectionLogged/>}/>
            </Routes>
      </BrowserRouter>
  )
}
