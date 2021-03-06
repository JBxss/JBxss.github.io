import { React, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import "./config.css";

const Config = ({ theme, toggleTheme }) => {
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
      <option value="" selected>{t("lng")}</option>
        <option value="en">{t("en")}</option>
        <option value="es">{t("es")}</option>
      </select>

      <button onClick={toggleTheme} className="btn btn__theme">
        {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Config;
