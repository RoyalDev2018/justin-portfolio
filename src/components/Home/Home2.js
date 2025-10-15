import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <b className="purple">Justin Dewayne O'Hara</b>, a <b className="purple">Senior Mobile developer</b> with a strong background in building and scaling apps for <b className="purple">healthcare, fintech, and food delivery</b>.  🤷‍♂️
              <br />
              <br />
              I am experienced in <i>React Native, Swift, Kotlin, and modern JavaScript frameworks</i>, bringing together native and cross-platform development with solid backend integration.
              <br />
              <br />
              My interests include creating innovative and valuable <i><b className="purple">technologies and products</b></i>, 
              especially in <i><b className="purple">Mobile & Web App Development</b></i>.
              <br />
              <br />
              I am skilled in creating reliable, high-performance mobile experiences through clean architecture, API design, and real-time data handling. Focused on delivering stable apps that perform under pressure and feel natural in use.
              <br />
              <br />
              Outside of coding, I enjoy keeping up with tech trends, collaborating with fellow developers 🤝, and bringing creative ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
