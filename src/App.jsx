import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop'



function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop/> }></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
