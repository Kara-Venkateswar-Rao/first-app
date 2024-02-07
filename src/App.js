import React from 'react';
import './App.css';
import './index.css'
import Home from './Home';
import About from './About'
import Servivce from './Services'
import Contact from './Contact'
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

const App = () => {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/about' Component={About}/>     
      <Route exact path='/service' Component={Servivce}/>     
      <Route exact path='/contact' Component={Contact}/>
    </Routes>    
   </>
  );
};

export default App;
