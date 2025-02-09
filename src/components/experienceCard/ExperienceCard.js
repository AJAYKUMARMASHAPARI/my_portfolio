import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;

    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt={experience["company"]}
              style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }} // Ensures logos are visible
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: "50%",
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Job Title */}
                  <h3
                    className="experience-card-title"
                    style={{ color: "#FFFFFF" }} // Force white text for job titles
                  >
                    {experience["title"]}
                  </h3>

                  {/* Company Name */}
                  <p
                    className="experience-card-company"
                    style={{ color: "#FFFFFF" }} // Force white text for company name
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#FFD700" }} // Gold link for a professional look
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    {/* Duration */}
                    <p
                      className="experience-card-duration"
                      style={{ color: "#FFFFFF" }} // Force white text for duration
                    >
                      {experience["duration"]}
                    </p>
                    {/* Location */}
                    <p
                      className="experience-card-location"
                      style={{ color: "#FFFFFF" }} // Force white text for location
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  color: "#FFFFFF", // Force white text for job descriptions
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {experience["description"]}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
