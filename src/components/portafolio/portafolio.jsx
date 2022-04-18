import React from "react";
import { useTranslation } from "react-i18next";
import data from "./projects";
import "./portafolio.css";

const Portafolio = () => {
  const { t } = useTranslation(["common"]);

  return (
    <section id="portafolio">
      <h5>{t("small_portafolio")}</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-links">
                <a href={github} target='_blank' rel="noopener noreferrer" className="btn">
                  GitHub
                </a>
                <a href={demo} target='_blank' rel="noopener noreferrer" className="btn btn-primary">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
