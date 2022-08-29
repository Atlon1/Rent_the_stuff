import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Fundation from "./components/Pagination/Fundation";
import Organization from "./components/Pagination/Organization";
import Local from "./components/Pagination/Local";


export default function App () {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Login' element={<Login/>}/>
                <Route path='Register' element={<Register/>}/>
                <Route path='/Fundation' element={<Fundation/>}/>
                <Route path='/Organization' element={<Organization/>}/>
                <Route path='/Local' element={<Local/>}/>
            </Routes>
      </BrowserRouter>
  )
}
