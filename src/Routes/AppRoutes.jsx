import React from 'react'
import Home from '../Pages/Home'
import { Routes, Route} from 'react-router-dom'
import Blog from '../Component/Blog'
import Resources from '../Pages/Resources'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Layout from '../Component/Layout'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AppRoutes = () => {
  return (
    <div>
     
      <Routes>
      {/* <Route path="/" element={<Layout/>}/>  */}
      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={ <Login/>}/>
      <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  )
}

export default AppRoutes;
