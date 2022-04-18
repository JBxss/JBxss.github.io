import React from "react";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";


const Experience = () => {
  const { t } = useTranslation(["experience"]);

  return (
    <section id="experience">
      <h5>{t("whatSkills")}</h5>
      <h2>{t("experience")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontDev")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("medium")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t("medium")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>JS/ECMA 6+</h4>
                <small className="text-light">{t("medium")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">{t("medium")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">{t("low")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">{t("low")}</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of Frontend */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">{t("medium")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">{t("low")}</small>
              </div>
            </article>
          </div>
        </div>
        {/* END of Backend */}

      </div>
    </section>
  );
};

export default Experience;
