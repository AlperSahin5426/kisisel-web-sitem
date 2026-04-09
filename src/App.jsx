import './App.css'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Profile from './sections/Profile'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
        <ToastContainer/>


    
    </>
  )
}

export default App
