import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="heroSection">
      <Navbar />
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100">
        <div className="heroCard text-center text-white">
          <h2 className="display-3 fw-bold mb-4">{t("hero.title")}</h2>
          <Link to={"/services"} className="btn text-decoration-none">
            {t("hero.link")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
