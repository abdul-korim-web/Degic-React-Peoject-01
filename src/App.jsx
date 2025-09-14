
import './App.css'
import Navbar from './Component/Navbar/Navbar'

import Footer from './Component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from "./Component/Weblayout/Weblayout"
import About from './Component/About/About'
import Services from './Component/MyService/Service'
import Project from "./Component/MyProject/Project"
import ContactPage from './Component/ContactPage/ContactPage'






function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Weblayout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

        

      </Routes>
      <Footer/>
    
    </BrowserRouter>
     

  )
}

export default App
