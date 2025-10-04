import "./AboutUsSec.css";
import { useTranslation } from "react-i18next";

function AboutUsSec() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection py-5 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" id="cardContainer">
            <h2 className="fw-bold mb-3">{t("about.title")}</h2>
            <p className="mb-3">{t("about.para")}</p>
            <a href="#" className="btn btn-dark rounded-pill px-4 py-2 mt-5">
              {t("about.link")}
            </a>
          </div>
          <div className="col-lg-6">
            <div
              className="d-flex gap-3 justify-content-center about-img-group"
              id="imgContainer"
            >
              <div id="firstImg"></div>
              <div id="secondImg"></div>
              <div id="thirdImg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSec;
