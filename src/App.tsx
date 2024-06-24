import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { api } from './api';
import { Navbar } from './components/Navbar';

import './App.css';


function App() {

  return (
    <div className='App'>  
      <Navbar/>
      <h2>CinemaAi</h2>
      <Outlet/>
    </div>
  )
}

export default App
