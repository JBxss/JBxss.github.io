import React from "react";
import "./portafolio.css";
import data from "./projects";

const portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
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
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary">
                  Repositorio
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portafolio;
