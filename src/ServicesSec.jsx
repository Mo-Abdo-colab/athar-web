import { useTranslation } from "react-i18next";
import "./ServicesSec.css";
import card1 from "./assets/card1.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";
import ServicesCard from "./ServicesCard";

function ServicesSec() {
  const { t } = useTranslation();
  return (
    <div className="ourServices">
      <div className="innerContainer">
        <div className="titleContainer container">
          <h2>{t("services.title")}</h2>
        </div>
        <div className="container">
          <div className="row mt-3 ">
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
  );
}

export default ServicesSec;
