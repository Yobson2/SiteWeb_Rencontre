import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registre from './Pages/Registre';
import Dashboard from './Pages/DashboardUser';


function App() {

  return (
    <div className='body-app'> 
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DashboardUser/:id" element={<Dashboard />} />   
      </Routes>
    </div>
  )
}

export default App
