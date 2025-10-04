import NavLogo from "./assets/NavLogo.png";
import { NavLink } from "react-router-dom";
import globe from "./assets/icon-global.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/languageSwitcher/LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar-wrapper navbar navbar-expand-lg mt-4 wide-navbar">
      <div className="container-fluid">
        <div>
          <NavLink className="navbar-brand" to="/">
            <img src={NavLogo} />
          </NavLink>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto gap-5">
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
        </div>
        <div className="lan gap-2 flex d-flex flex-row align-items-center">
          <LanguageSwitcher />
          <img src={globe} />
          <NavLink to="/booking" className="btn  m-3" id="bookBtn">
            {t("navbar.button")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
