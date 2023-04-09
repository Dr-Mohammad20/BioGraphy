import React, { Component } from "react";
import ContactUsStyle from "../Styles/ContactUsStyle.module.css";

import LeftMenu from "./LeftMenu";

import telegramIcon from "../Images/telegramIcon.png";
import whatsupIcon from "../Images/whatsupIcon.png";
import instagramIcon from "../Images/instagramIcon.png";
import emailIcon from "../Images/emailIcon.png";

class ContactUs extends Component {
  render() {
    return (
      <div className={ContactUsStyle.MainDiv}>
        <div className={ContactUsStyle.RightSide}>
          <LeftMenu />
        </div>
        <div className={ContactUsStyle.LeftSide}>
          <div className={ContactUsStyle.contentContactUs}>
            <div className={ContactUsStyle.mainDivContact}>
              <div className={ContactUsStyle.AdressLeft}>
                <h1 className={ContactUsStyle.Font1}>آدرس :</h1>
                <h3 className={ContactUsStyle.Font3}>مکان درج ادرس </h3>
                <h3 className={ContactUsStyle.Font3}>تلفن</h3>
              </div>
              <div className={ContactUsStyle.AdressRight}>
                <iframe
                  className={ContactUsStyle.Map}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.1267636620172!2d48.36065974552623!3d33.5009049937544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3feec10afb5f9383%3A0x7e5dd923c48dfab3!2sJoundishapour%20Medical%20Center!5e0!3m2!1sen!2s!4v1637398245283!5m2!1sen!2s"
                  title="لوکیشن"></iframe>
              </div>
              <div className={ContactUsStyle.AdressDown}>
                <a href="https://telegram.me/-------">
                  <img
                    className={ContactUsStyle.contactIcon}
                    src={telegramIcon}
                    alt="telegram"
                    title="تلگرام"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=980000000000">
                  <img
                    className={ContactUsStyle.contactIcon}
                    src={whatsupIcon}
                    alt="whatsup"
                    title="واتس آپ"
                  />
                </a>
                <a href="https://instagram.com/---------">
                  <img
                    className={ContactUsStyle.contactIcon}
                    src={instagramIcon}
                    alt="instagram"
                    title="اینستاگرام"
                  />
                </a>
                <a href="mailto:a@a.com">
                  <img
                    className={ContactUsStyle.contactIcon}
                    src={emailIcon}
                    alt="Email"
                    title="ایمیل"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
