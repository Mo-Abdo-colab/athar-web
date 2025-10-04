import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      className={`btn ${
        isHome ? "text-white fw-semibold fs-5" : "text-dark fw-semibold fs-5"
      }`}
      onClick={switchLanguage}
    >
      {i18n.language === "en" ? "AR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
