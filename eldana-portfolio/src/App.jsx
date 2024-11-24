import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Testimonial from './Components/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
