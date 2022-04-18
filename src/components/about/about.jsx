import React from "react";
import { useTranslation } from "react-i18next";
import { FaAward, FaFolderOpen, FaHourglassHalf } from "react-icons/fa";
import ME from "../../assets/me_about.png";
import "./about.css";

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <section id="about">
      <h5>{t("getToKnow")}</h5>
      <h2>{t("about")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Mi foto" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaHourglassHalf className="about__icon" />
              <h5>{t("experience")}</h5>
              <small>{t("small")}</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("education")}</h5>
              <small>10+ {t("certificate")}</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>{t("projects")}</h5>
              <small>5 {t("complete")}</small>
            </article>
          </div>

          <p>{t("lore")}</p>

          <a
            href="https://drive.google.com/drive/folders/1S1NPiKxZYqjyP7GykIuf4ZNLbwQzXm76?usp=sharing"
            className="btn btn-primary"
          >
            {t("see")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
