import React from 'react'
import Home from './Pages/Home'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
      {/* <Home/>  */}
    </div>
  )
}

export default App
