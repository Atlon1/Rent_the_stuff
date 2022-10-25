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
                <Route path='/Rent_the_stuff/' element={<Home/>}/>
                <Route path='/Rent_the_stuff/Login' element={<Login/>}/>
                <Route path='/Rent_the_stuff/Register' element={<Register/>}/>
                <Route path='/Rent_the_stuff/UserLoginInHome' element={<UserLoginInHome/>}/>
                <Route path='/Rent_the_stuff/Wylogowano' element={<Wylogowano/>}/>
                <Route path='/Rent_the_stuff/UserLoginInHome/FormSection' element={<FormSectionLogged/>}/>
            </Routes>
      </BrowserRouter>
  )
}
