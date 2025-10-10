import bookingimg from "./assets/booking-image.svg";
import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import verify from "./assets/verify.svg";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";
import "./Booking.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import API_URL from "./config";
import { useNavigate } from "react-router-dom";

// Fix marker icon issue for leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationPicker({ show, onClose, onSelect }) {
  const [position, setPosition] = useState([24.7136, 46.6753]); // Default: Riyadh
  const { t } = useTranslation();

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return <Marker position={position} />;
  }

  if (!show) return null;
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered bg-transparent">
        <div className="modal-content text-center my-5 bg-white">
          <div className="modal-header">
            <h5>{t("booking.Select Location")}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body" style={{ height: 400 }}>
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
            </MapContainer>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => {
                onSelect(position);
                onClose();
              }}
            >
              {t("booking.Select This Location")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    country: "",
    phone: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.fname) newErrors.fname = "First name is required";
    else if (!/^[A-Za-z\u0600-\u06FF\s]+$/.test(formData.fname))
      newErrors.fname = "First name must be letters only";
    if (!formData.lname) newErrors.lname = "Last name is required";
    else if (!/^[A-Za-z\u0600-\u06FF\s]+$/.test(formData.lname))
      newErrors.lname = "Last name must be letters only";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{7,}$/.test(formData.phone))
      newErrors.phone = "Phone must be at least 7 digits";
    if (formData.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.address) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (e) => {
    setValue(e.target.value);
    setFormData({ ...formData, country: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setShowModal(true);
      if (isEditMode) {
        // Update last booking
        await fetch(`${API_URL}/booking/last`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setIsEditMode(false);
      } else {
        // Create new booking
        await fetch(`${API_URL}/booking`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
    }
  };

  return (
    <div id="booking">
      <div className="container ">
        <Nav />
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="row g-3" noValidate>
              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.fname")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className={`form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.fname ? " is-invalid" : ""
                  }`}
                  type="text"
                  required
                  placeholder={t("booking.phfname")}
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && (
                  <div className="invalid-feedback d-block">{errors.fname}</div>
                )}
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.lname")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className={`form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.lname ? " is-invalid" : ""
                  }`}
                  type="text"
                  required
                  placeholder={t("booking.phlname")}
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
                {errors.lname && (
                  <div className="invalid-feedback d-block">{errors.lname}</div>
                )}
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">{t("booking.countrycode")}</label>
                <select
                  className={`form-select form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.country ? " is-invalid" : ""
                  }`}
                  value={value}
                  name="country"
                  onChange={changeHandler}
                >
                  <option value="">{t("booking.phcountrycode")}</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <div className="invalid-feedback d-block">{errors.country}</div>
                )}
              </div>

              <div className="col-md-6 col-6">
                <label className="form-label">
                  {t("booking.phone")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className={`form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.phone ? " is-invalid" : ""
                  }`}
                  type="tel"
                  value={formData.phone}
                  placeholder={t("booking.phphone")}
                  required
                  onChange={handleChange}
                  name="phone"
                />
                {errors.phone && (
                  <div className="invalid-feedback d-block">{errors.phone}</div>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">{t("booking.email")}</label>
                <input
                  className={`form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.email ? " is-invalid" : ""
                  }`}
                  type="email"
                  placeholder={t("booking.phemail")}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">{errors.email}</div>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">
                  {t("booking.address")}{" "}
                  <span className="booking-required-text">
                    {t("booking.required")}
                  </span>
                </label>
                <input
                  className={`form-control bg-transparent d-flex flex-row justify-content-end align-items-center px-3 py-2 gap-2 border border-dark rounded-4 align-self-stretch${
                    errors.address ? " is-invalid" : ""
                  }`}
                  type="text"
                  required
                  placeholder={t("booking.phaddress")}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onClick={() => setShowMap(true)}
                  readOnly
                />
                {errors.address && (
                  <div className="invalid-feedback d-block">{errors.address}</div>
                )}
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
                    onClick={() => {
                      // Hide modal, enable edit mode
                      setShowModal(false);
                      setIsEditMode(true);
                    }}
                    id="editBtn"
                  >
                    {t("popup.editbtn")}
                  </button>
                  <button
  className="btn btn-outline-dark d-flex flex-row justify-content-center align-items-center px-3 py-2 gap-2 rounded-4"
  id="goHomeBtn"
  onClick={() => {
    setShowModal(false);
    setFormData({
      fname: "",
      lname: "",
      country: "",
      phone: "",
      email: "",
      address: "",
    });
    setValue("");
    setIsEditMode(false);
    document.querySelector("form").reset();
    navigate("/"); // 👈 Redirect to Home page
  }}
>
  {t("popup.confirmbtn")}
</button>

                </div>
              </div>
            </div>
          </div>
        )}
        <LocationPicker
          show={showMap}
          onClose={() => setShowMap(false)}
          onSelect={async (position) => {
            const [lat, lng] = position;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
              );
              const data = await response.json();
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.hamlet ||
                data.address.state ||
                data.display_name ||
                `Lat: ${lat}, Lng: ${lng}`;
              setFormData((prev) => ({
                ...prev,
                address: city,
                GoogleMapsLink: `https://maps.google.com/?q=${lat},${lng}`,
              }));
            } catch (err) {
              setFormData((prev) => ({
                ...prev,
                address: `Lat: ${lat}, Lng: ${lng}`,
                GoogleMapsLink: `https://maps.google.com/?q=${lat},${lng}`,
              }));
            }
          }}
        />
      </div>
    </div>
  );
}

export default FormPage;
