import React from 'react'
import { useTranslation } from "react-i18next";
import "./work.css"
import Works from './Works'

const Work = () => {
  const { t } = useTranslation(["work"]);
  return (
    <section className="work section" id='portfolio'>
      <span className="section__subtitle">{t("work_subtitle")}</span>
        <h2 className="section__title">{t("work_title")}</h2>
        

        <Works />
    </section>
  )
}

export default Work