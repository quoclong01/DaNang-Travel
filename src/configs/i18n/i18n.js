import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationEN } from "./en";
import { translationJP } from "./jp";
import { translationVN } from "./vi";

const resources = {
  EN: { translation: translationEN },
  JP: { translation: translationJP },
  VI: { translation: translationVN },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "EN",
  debug: false,
  lng: "JP",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
