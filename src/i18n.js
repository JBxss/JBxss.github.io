import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        //translation file path
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",

    // disabled in production
    debug: false,

    // can have multiple namespaces
    ns: ["common", "header", "about"],

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true,
    },
});

export default i18next;