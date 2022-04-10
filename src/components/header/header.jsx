import React from 'react'
import "./header.css"
import CV from './CV'
import ME from '../../assets/N2PuvF9Q_400x400-removebg-preview.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Juan Bossa</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CV />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Mi foto xD" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header