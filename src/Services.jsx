import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard";
import card1 from "./assets/card1.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";
import Nav from "./Nav";
import "./Services.css";
import ContactUsSec from "./ContactUsSec";
function Services() {
  const { t } = useTranslation();
  return (
    <div className="services">
      <Nav />
      <div className="ourServices mt-5">
        <div className="innerContainer">
          <div className="titleContainer container">
            <h2 className="text-center ">{t("services.title")}</h2>
          </div>
          <div className="subtitle d-flex flex-column gap-3">
            <h4 className="text-center fs-3 ">{t("servicesSec.subtitle")}</h4>
            <p className="text-center fs-5">{t("servicesSec.para1")}</p>
            <p className="text-center fs-5">{t("servicesSec.para2")}</p>
          </div>
          <div className="container">
            <div className="row mt-5 ">
              <ServicesCard
                img={card1}
                title={t("services.cardtitle1")}
                desc={t("services.cardpara1")}
                link={t("services.link")}
              />
              <ServicesCard
                img={card2}
                title={t("services.cardtitle2")}
                desc={t("services.cardpara2")}
                link={t("services.link")}
              />
              <ServicesCard
                img={card3}
                title={t("services.cardtitle3")}
                desc={t("services.cardpara3")}
                link={t("services.link")}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactUsSec />
    </div>
  );
}

export default Services;
