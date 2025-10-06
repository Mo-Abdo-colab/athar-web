import { Link } from "react-router-dom";
import FooterLogo from "./assets/FooterLogo.png";
import { useTranslation } from "react-i18next";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const { t } = useTranslation();
  return (
    <div>
      <footer className=" py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 mb-3">
              <img src={FooterLogo} className="color-white" id="footerLogo" />
            </div>

            <div className="col-md-3 mb-3">
              <h6 className="fw-bold fs-4 mb-3">{t("footer.about.about")}</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-light text-decoration-none" onClick={scrollToTop}>
                    {t("footer.about.ourcompany")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light text-decoration-none" onClick={scrollToTop}>
                    {t("footer.about.ourstory")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-light text-decoration-none" onClick={scrollToTop}>
                    {t("footer.about.blog")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-3">
              <h6 className="fw-bold fs-4 mb-3">
                {t("footer.information.information")}
              </h6>
              <p>{t("footer.information.cr")}</p>
              <p>{t("footer.information.po")}</p>
              <p>{t("footer.information.ry")}</p>
              <p>{t("footer.information.tele")}</p>
              <p>{t("footer.information.mobile")}</p>
            </div>

            <div className="col-md-3 mb-3">
              <h6 className="fw-bold fs-4 mb-3">
                {t("footer.location.location")}
              </h6>
              <p>{t("footer.location.address")}</p>
              <h6 className="fw-bold mt-5 fs-4 mb-3">{t("footer.contact")}</h6>
              <p>arabbusinessest@gmail.com</p>
              <p>+966596475546</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
