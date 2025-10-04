import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import "./AboutUs.css";
import ContactUsSec from "./ContactUsSec";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="aboutus">
      <div className="container">
        <Nav />
        <div
          id="firstSec"
          className="d-flex flex-column align-items-center gap-3 text-center mt-5"
        >
          <h1 className="fw-bolder">{t("aboutsection.about")}</h1>
          <p className="mt-3">{t("aboutsection.para1")}</p>
          <div className="aboutImg"></div>
          <p>{t("aboutsection.para2")}</p>
        </div>
        <ContactUsSec />
      </div>
    </div>
  );
}

export default AboutUs;
