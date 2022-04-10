import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jbxss/"><FaLinkedin /></a>
        <a href="https://github.com/JBxss"><FaGithubSquare /></a>
    </div>
  )
}

export default headerSocials