import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experiences from "./components/experience/experience"
import Services from "./components/services/services"
import Portafolio from "./components/portafolio/portafolio"
import Testimonials from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App