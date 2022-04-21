import React from 'react'
import { useTranslation } from "react-i18next";
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import "./footer.css"

const Footer = () => {
  const { t } = useTranslation(["common"]);

  return (
    <footer>
      <a href="/#" className='footer__logo'>Juan Bossa</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">{t("about")}</a></li>
        <li><a href="#experience">{t("exp")}</a></li>
        <li><a href="#services">{t("services")}</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#testimonials">{t("testimonial")}</a></li>
        <li><a href="#contact">{t("contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/JBxss.23/" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/jbxss__/" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/JBxss_" target='_blank' rel="noopener noreferrer"><AiFillTwitterCircle /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Juan Bossa. {t("copy")}</small>
      </div>

    </footer>
  )
}

export default Footer