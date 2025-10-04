import { useTranslation } from "react-i18next";
import Card from "./Card";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <div className="whyChooseUs">
      <div className="elements">
        <div className="sectionTitle">
          <h2>{t("choose.title")}</h2>
        </div>
        <div className="container">
          <div className="row" id="infoCards">
            <Card header={t("choose.header1")} desc={t("choose.para1")} />
            <Card header={t("choose.header2")} desc={t("choose.para2")} />
            <Card header={t("choose.header3")} desc={t("choose.para3")} />
            <Card header={t("choose.header4")} desc={t("choose.para4")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
