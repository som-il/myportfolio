import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

//import { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'

function App() {

  return (
    <>
 <Router>

    <Navbar></Navbar>
     

   <Routes>

    <Route path='/' element={<Hero/>}></Route>

    <Route path='/about' element={ <About/>}></Route>

    <Route path='/project' element={<Projects/>}></Route>

    <Route path='/skills' element={<Skills/>}></Route>

    <Route path='/contact' element={<Contact/>}></Route>

  </Routes>


   </Router>

  
    </>
  )
}

export default App
