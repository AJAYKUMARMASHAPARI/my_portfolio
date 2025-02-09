import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const PersonalData = contactPageData.personalSection;
const AddressData = contactPageData.addressSection;
const PhoneData = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />

        {/* ✅ Contact Section */}
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-section">
            <div className="contact-image-div">
              <img
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt="Ajay Mashapari"
              />
            </div>
            <div className="contact-text-div">
              <h1 className="contact-title">{ContactData["title"]}</h1>
              <p className="contact-description">
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        {/* ✅ Personal Life Section */}
        <Fade bottom duration={1000} distance="40px">
          <div className="personal-section">
            <div className="personal-text-div">
              <h1 className="personal-title">{PersonalData["title"]}</h1>
              <p className="personal-description">
                {PersonalData["description"]}
              </p>
            </div>
            <div className="personal-image-div">
              <img
                src={require(`../../assets/images/personal_logo.jpg`)}
                alt="Personal Life"
              />
            </div>
          </div>
        </Fade>

        {/* ✅ Address Section */}
        <Fade bottom duration={1000} distance="40px">
          <div className="address-section">
            <div className="address-text-div">
              <h1 className="address-title">{AddressData["title"]}</h1>
              <p className="address-description">{AddressData["subtitle"]}</p>
              <h1 className="address-title">{PhoneData["title"]}</h1>
              <p className="address-description">{PhoneData["subtitle"]}</p>
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={AddressData.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
