import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsImg from "./ProjectsImg";
import "./Projects.css";

let projectsData = [];
try {
  projectsData = require("../../shared/opensource/projects.json").data;
} catch (error) {
  console.warn("Projects data file not found or empty. Using fallback.");
}

// Function to extract Month & Year from date
const getMonthYear = (dateString) => {
  if (!dateString) return "Ongoing";
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "short", year: "numeric" }); // Example: "Oct 2023"
};

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* ✅ Projects Grid Layout */}
        {projectsData.length > 0 ? (
          <div className="repo-cards-div-main">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <h2 style={{ color: theme.text }}>
                  {project.name} ({getMonthYear(project.startDate)} -{" "}
                  {getMonthYear(project.endDate)})
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  {project.description}
                </p>

                {/* Displaying Tech Stack */}
                <div className="project-tech-stack">
                  {project.languages?.map((lang, index) => (
                    <span key={index} className="tech-item">
                      <i className={lang.iconifyClass} /> {lang.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ color: theme.highlight }}
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="no-projects-text"
            style={{ color: theme.secondaryText }}
          >
            No projects found. Check if `projects.json` is correctly linked.
          </p>
        )}

        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
