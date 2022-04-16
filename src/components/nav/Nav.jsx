import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {IoLibraryOutline} from 'react-icons/io5'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineHomeRepairService, MdLightMode} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><IoLibraryOutline /></a>
      <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portafolio" onClick={() => setActiveNav('#portafolio')} className={activeNav === '#portafolio' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      {/* <a href="#Theme" onClick={() => setActiveNav('#config')} className={activeNav === '#config' ? 'active' : ''}><MdLightMode /></a> */}
    </nav>
  )
}

export default Nav