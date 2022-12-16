import React from "react";
import img1 from "../assets/subs.png";
import { useTranslation } from "react-i18next";
export default function Subcribe() {
  const { t } = useTranslation();
  return (
    <section className="section-subcribe">
      <div className="container">
        <div className="subcribe-wrapper">
          <div className="subcribe-image">
            <img src={img1} alt="subcribeImage" />
          </div>
          <div className="subcribe-content">
            <h3 className="txt-title txt-center">{t("home.get_special")}</h3>
            <p className="txt-center">{t("home.subscribe_secret")}</p>
            <div className="subcribe-form">
              <input
                className="subcribe-form-input"
                type="text"
                placeholder={t("home.email")}
              />
              <button className="btn btn-primary subcribe-btn">{t("home.subcribe")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
