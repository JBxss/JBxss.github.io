import React from 'react'
import "./footer.css"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Juan Bossa</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/JBxss.23/" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/jbxss__/" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/JBxss_" target='_blank' rel="noopener noreferrer"><AiFillTwitterCircle /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Juan Bossa. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default footer