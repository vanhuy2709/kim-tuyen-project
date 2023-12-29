import React from "react";
import "./Client.scss";
import gfiLogo from "../../assets/images/GFI-logo.png";
import beionLogo from "../../assets/images/beion-logo.png";
// import bomLogo from "../../assets/images/bom-logo.png";
import californiaLogo from "../../assets/images/california-logo.png";
import congCoffeeLogo from "../../assets/images/cong-coffee-logo.png";
import emmieLogo from "../../assets/images/emmie-logo.png";
import glowieLogo from "../../assets/images/glowie-logo.png";
import gumacLogo from "../../assets/images/gumac-logo.png";
import heinekenLogo from "../../assets/images/heineken-logo.png";
import hoaianLogo from "../../assets/images/hoai-an-logo.png";
import jockeyLogo from "../../assets/images/jockey-logo.png";
import jp24Logo from "../../assets/images/jp24-logo.png";
import kitawaLogo from "../../assets/images/kitawa-logo.png";
import lavieLogo from "../../assets/images/lavie-logo.png";
import lazadaLogo from "../../assets/images/lazada-logo.png";
import nestleLogo from "../../assets/images/nestle-logo.png";
import orphicLogo from "../../assets/images/orphic-logo.png";
import pnjLogo from "../../assets/images/pnj-logo.png";
import prudentialLogo from "../../assets/images/prudential-logo.png";
import saigonDustyLogo from "../../assets/images/saigon-dusty-logo.png";
import saigonHotpotLogo from "../../assets/images/saigon-hotpot-logo.png";
import samsungLogo from "../../assets/images/samsung-logo.png";
import tupperwareLogo from "../../assets/images/tupperware-logo.png";
import vinfastLogo from "../../assets/images/vinfast-logo.png";
import the350fLogo from '../../assets/images/350f-logo.png';
import zemaLogo from "../../assets/images/zema-logo.png";
import senvitaLogo from '../../assets/images/senvita-logo.png';
import xiaomiLogo from '../../assets/images/xiaomi-logo.png';
import nuDoanhNhanLogo from '../../assets/images/nu-doanh-nhan-logo.png';
import upgoLogo from '../../assets/images/upgo-logo.png';
import swensenLogo from '../../assets/images/swensen-logo.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="client">
      <div className="wrapper">
        <div className="client-container">
          <h2 className="client__title">CLIENTS</h2>
          <div className="client__list">
            <img src={samsungLogo} alt="samsung-logo" data-aos="fade-up" />
            <img src={californiaLogo} alt="california-logo" data-aos="fade-up" />
            <img src={heinekenLogo} alt="heineken-logo" data-aos="fade-up" />
            <img src={vinfastLogo} alt="vinfast-logo" data-aos="fade-up" />
            <img src={xiaomiLogo} alt="xiaomi-logo" data-aos="fade-up" />
            <img src={nuDoanhNhanLogo} alt="nuDoanhNhan-logo" data-aos="fade-up" />
            <img src={gfiLogo} alt="gfi-logo" data-aos="fade-up" />
            <img src={zemaLogo} alt="zema-logo" data-aos="fade-up" />
            <img src={lavieLogo} alt="lavie-logo" data-aos="fade-up" />
            <img src={congCoffeeLogo} alt="congCoffee-logo" data-aos="fade-up" />
            <img src={gumacLogo} alt="guma-logo" data-aos="fade-up" />
            <img src={pnjLogo} alt="pnj-logo" data-aos="fade-up" />
            <img src={prudentialLogo} alt="prudential-logo" data-aos="fade-up" />
            <img src={beionLogo} alt="beion-logo" data-aos="fade-up" />
            {/* <img src={bomLogo} alt="gfi-logo" data-aos="fade-up" /> */}
            <img src={glowieLogo} alt="glowie-logo" data-aos="fade-up" />
            <img src={hoaianLogo} alt="hoaian-logo" data-aos="fade-up" />
            <img src={jockeyLogo} alt="jockey-logo" data-aos="fade-up" />
            <img src={jp24Logo} alt="jp24-logo" data-aos="fade-up" />
            <img src={kitawaLogo} alt="kitawa-logo" data-aos="fade-up" />
            <img src={lazadaLogo} alt="lazada-logo" data-aos="fade-up" />
            <img src={nestleLogo} alt="nestle-logo" data-aos="fade-up" />
            <img src={orphicLogo} alt="orphic-logo" data-aos="fade-up" />
            <img src={saigonDustyLogo} alt="saigonDusty-logo" data-aos="fade-up" />
            <img src={saigonHotpotLogo} alt="saigonHotpot-logo" data-aos="fade-up" />
            <img src={the350fLogo} alt="the350f-logo" data-aos="fade-up" />
            <img src={senvitaLogo} alt="senvita-logo" data-aos="fade-up" />
            <img src={tupperwareLogo} alt="tupperware-logo" data-aos="fade-up" />
            <img src={emmieLogo} alt="emmie-logo" data-aos="fade-up" />
            <img src={upgoLogo} alt="upgo-logo" data-aos="fade-up" />
            <img src={swensenLogo} alt="swensen-logo" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
