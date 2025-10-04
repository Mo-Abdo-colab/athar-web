import NavLogo from "./assets/NavLogo.png";
import { NavLink } from "react-router-dom";
import globe from "./assets/icon-global.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar-wrapper navbar navbar-expand-lg mt-4 wide-navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between ">
        {/* Brand */}
        <NavLink className="navbar-brand me-3" to="/">
          <img src={NavLogo} />
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
          className="collapse navbar-collapse navbar-overlay justify-content-center"
          id="navbarNav"
        >
          <ul
            className="navbar-nav gap-4 align-items-center mx-auto"
            style={{ flex: "0 1 auto" }}
          >
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" +
                  (isActive ? " text-white text-decoration-underline" : "")
                }
                to="/"
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" +
                  (isActive ? " text-white text-decoration-underline" : "")
                }
                to="/about"
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" +
                  (isActive ? " text-white text-decoration-underline" : "")
                }
                to="/services"
              >
                {t("navbar.services")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" +
                  (isActive ? " text-white text-decoration-underline" : "")
                }
                to="/contact"
              >
                {t("navbar.contact")}
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Right side: Language Switcher, Globe, and Appointment Button */}
        <div className="d-flex align-items-center gap-2 flex-shrink-0 ms-3">
          <LanguageSwitcher />
          <img src={globe} alt="globe" />
          <NavLink to="/booking" className="btn m-3" id="bookBtn">
            {t("navbar.button")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
