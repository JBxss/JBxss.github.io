import React from 'react'
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation(["about"]);
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bxs-hourglass about__icon' ></i>
            <h3 className="about__title">{t("about_title-exp")}</h3>
            <span className="about__subtitle">6 {t("about_exp")}</span>
        </div>

        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">{t("about_title-edu")}</h3>
            <span className="about__subtitle">+30 {t("about_edu")}</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt-2 about__icon' ></i>
            <h3 className="about__title">{t("about_title-work")}</h3>
            <span className="about__subtitle">+10 {t("about_work")}</span>
        </div>
    </div>
  )
}

export default Info;