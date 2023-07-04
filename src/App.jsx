import Footer from "./common/Footer"
import Nav from "./common/Nav"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Experiences from "./components/Experiences"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
