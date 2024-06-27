import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { api } from './api';
import { Navbar } from './components/NavBar/Navbar';

import './App.css';

function App() {

  return (
    <div className='App'>  
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
