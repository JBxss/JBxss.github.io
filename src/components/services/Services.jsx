import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./services.css"

const Services = () => {
  const { t } = useTranslation(["services"]);
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
      <span className="section__subtitle">{t("services_subtitle")}</span>
      <h2 className="section__title">{t("services_title")}</h2>
      

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">{t("services_modal1-title")} <br /> {t("services_modal1-subtitle")}</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
          {t("services_button")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">{t("services_modal1-title")} {t("services_modal1-subtitle")}</h3>
              <p className="services__modal-description">
              {t("services_modal1-description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal1-skill1")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal1-skill2")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal1-skill3")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal1-skill4")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal1-skill5")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-sitemap services__icon"></i>
            <h3 className="services__title">{t("services_modal2-title")} <br /> {t("services_modal2-subtitle")}</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
          {t("services_button")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">{t("services_modal2-title")} {t("services_modal2-subtitle")}</h3>
              <p className="services__modal-description">
              {t("services_modal2-description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal2-skill1")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal2-skill2")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal2-skill3")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal2-skill4")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal2-skill5")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-wrench services__icon"></i>
            <h3 className="services__title">{t("services_modal3-title")} <br /> {t("services_modal3-subtitle")}</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
          {t("services_button")}{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">{t("services_modal3-title")} {t("services_modal3-subtitle")}</h3>
              <p className="services__modal-description">
              {t("services_modal3-description")}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal3-skill1")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal3-skill2")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal3-skill3")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal3-skill4")}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  {t("services_modal3-skill5")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
