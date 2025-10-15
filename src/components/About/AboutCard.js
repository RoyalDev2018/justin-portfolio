import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I am <span className="purple">Justin O'Hara</span> from{" "}
            <span className="purple">Dallas, GA, USA</span>.
            <br />
            I am currently pursuing my Bachelor's Degree in <span className="purple">Computer Science</span> at <span className="purple">The University of Cambridge, UK</span>.
            <br />
            <br />
            Apart from coding, I enjoy exploring various activities that keep me inspired and motivated:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places and cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a meaningful difference in the world!" 💡
          </p>
          <footer className="blockquote-footer">Justin O'Hara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
