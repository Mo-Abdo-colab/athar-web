import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="heroSection">
      <Navbar />
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div className="heroCard text-center text-white">
          <h2 className="display-3 fw-bold mb-4">{t("hero.title")}</h2>
          <a href="#" className="btn text-decoration-none">
            {t("hero.link")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
