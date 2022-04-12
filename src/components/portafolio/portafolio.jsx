import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/portfolio6.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Projecto de Github",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Projecto de BsGithub",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

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
                  Repo
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