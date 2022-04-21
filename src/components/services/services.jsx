import React from 'react'
import { useTranslation } from "react-i18next";
import {FiCheckSquare} from 'react-icons/fi'
import "./services.css"

const Services = () => {
  const { t } = useTranslation(["services"]);

  return (
    <section id='services'>
      <h5>{t("whatOffer")}</h5>
      <h2>{t("services")}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("ux")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item1_ux")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item2_ux")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item3_ux")}</p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>{t("web")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item1_web")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item2_web")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item3_web")}</p>
            </li>
          </ul>
        </article>
        {/* END of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>{t("cont")}</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item1_cont")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item2_cont")}</p>
            </li>
            <li>
              <FiCheckSquare className='service__list-icon' />
              <p>{t("item3_cont")}</p>
            </li>
          </ul>
        </article>
        {/* END of Content Creation*/}

      </div>
    </section>
  )
}

export default Services