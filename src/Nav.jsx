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
      <div className="container">
        <div>
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} />
          </NavLink>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            id="navToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto gap-5 ms-5">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link text-black" +
                    (isActive
                      ? " text-black text-decoration-underline"
                      : "nav-link text-black")
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
                    (isActive
                      ? " text-black text-decoration-underline"
                      : "nav-link text-black")
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
                    (isActive
                      ? " text-black text-decoration-underline"
                      : "nav-link text-black")
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
                    (isActive
                      ? " text-black text-decoration-underline"
                      : "nav-link text-black")
                  }
                  to="/contact"
                >
                  {t("navbar.contact")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="lan gap-2 flex d-flex flex-row align-items-center">
          <LanguageSwitcher />
          <img src={globe} />
          {location.pathname !== "/booking" && (
            <NavLink to="/booking" className="btn m-3" id="bookBtn">
              {t("navbar.button")}
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
