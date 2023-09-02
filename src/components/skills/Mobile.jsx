import React from "react";
import { mobile } from "./Data";

const Mobile = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {mobile.map(({ name, image }) => {
            return (
              <div className="skills__data">
                <i class="bx bx-badge-check"></i>
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
