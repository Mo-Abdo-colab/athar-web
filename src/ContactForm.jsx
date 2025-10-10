import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import API_URL from "./config";

function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    countrycode: "Saudi Arabia",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  // Unified change handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Validation rules
  const validate = () => {
    const newErrors = {};
    if (!form.fname) newErrors.fname = "First name is required";
    else if (!/^[A-Za-z\u0600-\u06FF\s]+$/.test(form.fname))
      newErrors.fname = "First name must be letters only";
    if (!form.lname) newErrors.lname = "Last name is required";
    else if (!/^[A-Za-z\u0600-\u06FF\s]+$/.test(form.lname))
      newErrors.lname = "Last name must be letters only";
    if (!form.phone) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{7,}$/.test(form.phone))
      newErrors.phone = "Phone must be at least 7 digits";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Send data to backend
      try {
        const response = await fetch(`${API_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (response.ok) {
          setShowPopup(true);
        } else {
          alert("Failed to submit. Please try again.");
        }
      } catch (error) {
        alert("Server error. Please try again.");
      }
    }
  };

  const handleSubmitok = () => {
    setShowPopup(false);
    setForm({
      fname: "",
      lname: "",
      countrycode: "Saudi Arabia",
      phone: "",
      email: "",
      address: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="formSec">
      <form className="row g-3" onSubmit={handleSubmit} noValidate>
        <div className="col-md-6">
          <label htmlFor="fname" className="form-label">
            {t("contactus.fname")} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control${errors.fname ? " is-invalid" : ""}`}
            id="fname"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            placeholder={t("contactus.phfname")}
            required
          />
          {errors.fname && (
            <div className="invalid-feedback">{errors.fname}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lname" className="form-label">
            {t("contactus.lname")} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control${errors.lname ? " is-invalid" : ""}`}
            id="lname"
            name="lname"
            value={form.lname}
            onChange={handleChange}
            required
            placeholder={t("contactus.phlname")}
          />
          {errors.lname && (
            <div className="invalid-feedback">{errors.lname}</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="countrycode" className="form-label">
            {t("contactus.countrycode")}
          </label>
          <select
            className="form-select"
            name="countrycode"
            value={form.countrycode}
            onChange={handleChange}
            id="countrycode"
          >
            <option value="">{t("booking.phcountrycode")}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            {t("contactus.phone")} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control${errors.phone ? " is-invalid" : ""}`}
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder={t("contactus.phphone")}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone}</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            {t("contactus.email")} <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control${errors.email ? " is-invalid" : ""}`}
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("contactus.phemail")}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            {t("contactus.address")} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control${errors.address ? " is-invalid" : ""}`}
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder={t("contactus.phaddress")}
            required
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            {t("contactus.message")} <span className="text-danger">*</span>
          </label>
          <textarea
            name="message"
            rows="8"
            cols="100"
            id="message"
            className={`form-control${errors.message ? " is-invalid" : ""}`}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        <div className="col-12">
          <button type="submit" className="submitBtn">
            {t("contactus.link")}
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4>{t("contactpopup.title")}</h4>
            <p>{t("contactpopup.desc")}</p>
            <button
              className="btn btn-dark"
              onClick={handleSubmitok}
            >
              {t("contactpopup.link")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
