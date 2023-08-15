import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Styles/App.scss';

import Header from './Components/Header';
import './Styles/Header.scss';

import './Styles/Home.scss';
import Home from './Components/Home';

import './Styles/Fotter.scss'
import Fotter from './Components/Fotter';

import "./Styles/Contact.scss";
import Contact from "./Components/Contact";



const App = () => {
  return (
    <>


      <BrowserRouter>
        <Header />
        <Routes>
      
          <Route path="/"  element={<Home/>} /> 
          <Route path="/Contact"  element={<Contact/>} /> 
          </Routes>
          <Fotter></Fotter>
      </BrowserRouter>
    </>
  );
}

export default App;
