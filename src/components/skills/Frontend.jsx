import React from "react";
import { frontend } from "./Data";
import { useTranslation } from "react-i18next";

const Frontend = () => {
  const { t } = useTranslation(["skills"]);
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills_front")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {frontend.map(({ name, image }) => {
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

export default Frontend;
