import React from 'react'
import "./header.css"
import CV from './CV'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Juan Bossa</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CV />

        <div className="me">
          <img src="" alt="Mi foto xD" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header