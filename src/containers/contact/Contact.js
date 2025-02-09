import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        {/* Left Section - Contact Info */}
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="contact-image-div">
          <img
            className="contact-profile-img"
            alt="Ajay Mashapari"
            src={require("../../assets/images/contactMail.png")}
          />
        </div>
      </div>
    </div>
  );
}
