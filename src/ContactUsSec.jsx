import "./ContactUsSec.css";
import { useTranslation } from "react-i18next";
import inbox from "./assets/inbox.png";
import call from "./assets/call.png";
import ContactForm from "./ContactForm";

function ContactUsSec() {
  const { t } = useTranslation();
  return (
    <section className="ContactUsSec py-5 ">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="infoSec">
              <h2>{t("contactus.title")}</h2>
              <p id="contactPara">{t("contactus.para")}</p>
              <div className="email">
                <img src={inbox} alt="inbox" className="mb-2" />
                <h5>{t("contactus.emailus")}</h5>
                <p>arabbusinessest@gmail.com</p>
              </div>
              <div className="call  ">
                <img src={call} alt="call" className="mb-2" />
                <h5>{t("contactus.call")}</h5>
                <p>0596475546</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSec;
