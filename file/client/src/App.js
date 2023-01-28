import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Contextdata from './context/favitems'
function App() {
  return (
    <>
    <Contextdata>
    <Navbar/>
    <Outlet/>
    </Contextdata>
    </>
  )
}

export default App