import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__buttons">
        <a href={item.code} target="_blank" className="work__button">
          <i class="uil uil-github work__button-icon"></i> Code
        </a>
        <a href={item.demo} target="_blank" className="work__button">
          <i class="uil uil-play-circle work__button-icon"></i> Demo
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
