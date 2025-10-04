import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import "./App.css";
import AboutUs from "./Aboutus";
import Footer from "./Footer";
import Services from "./Services";
import Contact from "./Contact";
import Booking from "./Booking";

function App() {
  const { i18n } = useTranslation();

  // This handles RTL/LTR switching and Bootstrap CSS
  useEffect(() => {
    // Update HTML direction and language attribute
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;

    // Dynamically load Bootstrap CSS based on language
    reloadBootstrapCSS(i18n.language);
  }, [i18n.language]);

  // Function to reload Bootstrap CSS when language changes
  const reloadBootstrapCSS = (language) => {
    const existingBootstrapLink = document.querySelector(
      'link[href*="bootstrap"]'
    );
    if (existingBootstrapLink) {
      existingBootstrapLink.remove();
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      language === "ar"
        ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css"
        : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(link);
  };

  return (
    <div className={i18n.language === "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
