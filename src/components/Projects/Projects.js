import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tesla from "../../Assets/Projects/tesla.png";
import cdac from "../../Assets/Projects/cdac.png";
import career from "../../Assets/Projects/career.jpg";
import gamayas from "../../Assets/Projects/gamayas.jpg";
import resto from "../../Assets/Projects/resto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Work  <strong className="purple"> Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Internship  I've done since Collage.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdac}
              isBlog={false}
              title="Web Developer Intern"
              description="Currently Developing a high performance web application for a government client, leveraging JavaScript, React.Js, Node.Js, and MySQL technologies."
              ghLink="https://github.com/SagarD-123/"
              // demoLink="https://sagard-123.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={career}
              isBlog={false}
              title="UI UX Designer Intern"
              description="As my role was to Design Web and App designs of Thier project. The Main Highlight was to design a Website for Electric Bike Company which is currently in Development Phase."
              ghLink="https://github.com/SagarD-123/"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamayas}
              isBlog={false}
              title="Technical Executive Intern"
              description="During this Internship,I helped them in design and develope some web pages of thier sites."
              ghLink="https://github.com/SagarD-123/"
                         
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesla}
              isBlog={false}
              title="Tesla Clone"
              description="This is Clone Of Tesla's Official site which is build uisng HTML , CSS and JavaScript."
              ghLink="https://github.com/SagarD-123/SagarD-123.github.io"
              demoLink="https://sagard-123.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resto}
              isBlog={false}
              title="Restaurent Site"
              description="This is my very First project as Web Developer journey. Tech is used are HTML , CSS , JavaScript."
              ghLink="https://github.com/SagarD-123/Restaurant-Site"
              demoLink="https://sagard-123.github.io/Restaurant-Site/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
