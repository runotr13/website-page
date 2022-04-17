import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Footer from '../components/Footer'
import Html from '../pages/Html'
import Css from '../pages/Css'
import Logo from '../pages/Logo'
const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Html' element={<Html/>}/>
          <Route path='/Css' element={<Css/>}/>
          <Route path='/Logo' element={<Logo/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter