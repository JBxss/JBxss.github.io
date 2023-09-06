import React from "react";
import { mobile } from "./Data";
import { useTranslation } from "react-i18next";

const Mobile = () => {
  const { t } = useTranslation(["skills"]);
  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("skills_mobile")}</h3>

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
