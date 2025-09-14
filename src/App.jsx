
import './App.css'
import Navbar from './Component/Navbar/Navbar'

import Footer from './Component/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from "./Component/Weblayout/Weblayout"






function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Weblayout/>}/>
      </Routes>
      <Footer/>
    
    </BrowserRouter>
     

  )
}

export default App
