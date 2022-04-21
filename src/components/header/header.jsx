import React from 'react'
import { useTranslation } from 'react-i18next'
import CV from './CV'
import ME from '../../assets/me_header.png';
import HeaderSocials from './headerSocials'
import "./header.css"


const Header = () => {
  const { t } = useTranslation(["header"]);

  return (
    <header id="header">
      <div className="container header__container">
        <h5>{t("greeting")}</h5>
        <h1>{t("my_name")}</h1>
        <h5 className="text-light">{t("job")}</h5>
        <CV />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Mi foto" />
        </div>

        <a href="#contact" className='scroll__down'>{t("scroll")}</a>
      </div>
    </header>
  )
}

export default Header