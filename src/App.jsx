
import './App.css'
import Navbar from './Component/Navbar/Navbar'

import Footer from './Component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from "./Component/Weblayout/Weblayout"
import About from './Component/About/About'
import Services from './Component/MyService/Service'
import Project from "./Component/MyProject/Project"
import ContactPage from './Component/ContactPage/ContactPage'
import SignUpPage from './Component/Singup/singup'






function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Weblayout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/Contacts' element={<ContactPage/>}/>
        <Route path='/singup' element={<SignUpPage/>}/>

        

      </Routes>
      <Footer/>
    
    </BrowserRouter>
     

  )
}

export default App
