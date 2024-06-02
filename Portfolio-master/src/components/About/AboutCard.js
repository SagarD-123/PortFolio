import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sagar Deware </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently Doing Internship as a Web developer Intern at CDAC Bangalore.
            <br />
            I am Recent B.TECH Gradute in CSE at IIIT 
            Vadodara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videography
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketch Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sagar</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
