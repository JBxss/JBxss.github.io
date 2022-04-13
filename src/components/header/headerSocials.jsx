import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jbxss/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/JBxss" target='_blank' rel="noopener noreferrer"><FaGithubSquare /></a>
    </div>
  )
}

export default headerSocials