import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./config.css";
import { MdLightMode } from "react-icons/md";

const Config = () => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className="container config__container"
      value={localStorage.getItem("i18nextLng")}
      onChange={handleLanguageChange}
    >
      <select className="btn btn__trans">
        <option value="en">{t("en")}</option>
        <option value="es">{t("es")}</option>
      </select>

      <button className="btn btn__theme">
        <MdLightMode />
      </button>

    </div>
  );
};

export default Config;
