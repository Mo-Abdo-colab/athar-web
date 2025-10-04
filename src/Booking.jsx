import bookingimg from "./assets/booking-image.svg";
import { useState } from "react";
import verify from "./assets/verify.svg";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";
import "./Booking.css";

function FormPage() {
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState("Saudi Arabia");
  const [phone, setPhone] = useState("+966");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleCountryChange = (e) => {
    const selected = e.target.value;
    setCountry(selected);
    if (selected === "Egypt") {
      setPhone("+20");
    } else if (selected === "Saudi Arabia") {
      setPhone("+966");
    } else {
      setPhone("");
    }
  };
  return (
    <div id="booking">
      <div className="container ">
        <Nav />
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.fname")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className="form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  type="text"
                  required
                  placeholder={t("booking.phfname")}
                />
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.lname")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className="form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  type="text"
                  required
                  placeholder={t("booking.phlname")}
                />
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">{t("booking.countrycode")}</label>
                <select
                  className="form-select bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  value={country}
                  onChange={handleCountryChange}
                >
                  <option>Saudi Arabia</option>
                  <option>Egypt</option>
                </select>
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.phone")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className="form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  type="tel"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label className="form-label">{t("booking.email")}</label>
                <input
                  className="form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  type="email"
                  placeholder={t("booking.phemail")}
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  {t("booking.address")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className="form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch"
                  type="text"
                  required
                  placeholder={t("booking.phaddress")}
                />
              </div>

              <div className="col-md-4 col-12">
                <button
                  type="submit"
                  className="d-flex flex-row justify-content-center align-items-center py-2 px-4 gap-2 rounded-4 custom-btn"
                  id="subBtn"
                >
                  {t("booking.button")}
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={bookingimg}
              alt="Booking Illustration"
              className="img-fluid"
            />
          </div>
        </div>
        {showModal && (
          <div className="modal fade show d-block " tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered bg-transparent">
              <div className="modal-content text-center my-5 py-5 bg-white">
                <div>
                  <img src={verify} />
                </div>
                <h2 className="my-3">{t("popup.title")}</h2>
                <p className="mx-3">{t("popup.para")}</p>
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setShowModal(false)}
                    id="editBtn"
                  >
                    {t("popup.editbtn")}
                  </button>
                  <button
                    className="btn  btn-outline-dark d-flex flex-row justify-content-center align-items-center px-3 py-2 gap-2 rounded-4"
                    id="goHomeBtn"
                    onClick={() => setShowModal(false)}
                  >
                    {t("popup.confirmbtn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;
