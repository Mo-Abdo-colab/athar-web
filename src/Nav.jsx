import Logo from "./assets/logo.svg";
import { NavLink } from "react-router-dom";
import globe from "./assets/icon-global.svg";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./Nav.css";
import { useLocation } from "react-router-dom";
function Nav() {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <nav className="navbar-wrapper navbar navbar-expand-lg pt-4" id="subNav">
      <div className="container d-flex align-items-center justify-content-between flex-nowrap">
        {/* Brand */}
        <NavLink className="navbar-brand flex-shrink-0" to="/">
          <img src={Logo} />
        </NavLink>
        {/* Toggle Button for mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Centered Nav links */}
        <div
          className="collapse navbar-collapse navbar-overlay justify-content-center navOverlay"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-5 align-items-center mx-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-black" +
                  (isActive ? " text-black text-decoration-underline" : "")
                }
                to="/"
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-black" +
                  (isActive ? " text-black text-decoration-underline" : "")
                }
                to="/about"
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-black" +
                  (isActive ? " text-black text-decoration-underline" : "")
                }
                to="/services"
              >
                {t("navbar.services")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link text-black" +
                  (isActive ? " text-black text-decoration-underline" : "")
                }
                to="/contact"
              >
                {t("navbar.contact")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center gap-2 flex-shrink-0">
        {/* Right side: Language Switcher, Globe, and Appointment Button */}
          <div className="d-flex align-items-center gap-2">
            <LanguageSwitcher />
            <img src={globe} alt="globe" />
            {location.pathname !== "/booking" && (
              <NavLink to="/booking" className="btn m-3" id="bookBtn">
                {t("navbar.button")}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
