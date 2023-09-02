import React from "react";
import { mobile } from "./Data";

const Mobile = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Mobile Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {mobile.map(({ name, image }) => {
            return (
              <div className="skills__data">
                <img className="skills__img" src={image} alt="" />
                <div>
                  <h3 className="skills__name">{name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
