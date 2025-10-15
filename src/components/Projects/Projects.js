import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import cookunity from "../../Assets/Projects/cookunity.png";
import vseeMessenger from "../../Assets/Projects/vsee_messenger.png";
import vseeClinic from "../../Assets/Projects/vsee_clinic.png";
import fintron from "../../Assets/Projects/fintron.jpg";
import robinhood from "../../Assets/Projects/robinhood.png";
import tango from "../../Assets/Projects/tango.jpg";

function Projects() {
  // Project data in an array with tags (web / mobile)
  const projects = [
    {
      imgPath: cookunity,
      title: "CookUnity Food Delivery App",
      description: "CookUnity is a food delivery platform that allows users to browse chef-created meals and have them delivered directly to their door.",
      contribution: "Upgraded the app to React Native Expo, introducing real-time delivery tracking using EasyShip API and Firebase, enhancing offline functionality, and improving UI rendering with React Native 0.76. I integrated TurboModules to optimize critical components, upgraded payment systems to include cryptocurrency options, and improved app stability and speed using AWS services.",
      type: "mobile",
      google: "https://play.google.com/store/apps/details?id=com.cookunity.android.app&hl=en_US",
      apple: "https://apps.apple.com/us/app/cookunity-a-chef-marketplace/id1103061273",
    },    
    {
      imgPath: vseeMessenger,
      title: "VSee Messenger",
      description: "VSee Messenger is a secure messaging and video calling platform, designed for healthcare professionals to communicate with patients while maintaining HIPAA compliance.",
      contribution: "Migrated the app to React Native, integrating WebRTC for video calls and ensuring secure AES-256 encryption for live doctor-patient sessions. I optimized the app for low-bandwidth conditions, implemented Bluetooth connectivity for medical device syncing, and improved the user interface with picture-in-picture functionality during consultations.",
      type: "mobile",
      apple: "https://apps.apple.com/us/app/vsee-messenger/id722630830",
      google: "https://play.google.com/store/apps/details?id=com.vsee.vsee.release&hl=en_US",
    },
    {
      imgPath: vseeClinic,
      title: "VSee Clinic",
      description:
        "VSee Clinic is a telehealth platform that provides video consultations, real-time data streaming from medical devices, and management tools for healthcare providers.",
      contribution: "Migrated the clinic’s native apps to React Native, integrating real-time data syncing from medical devices via Bluetooth Low Energy (BLE) and optimizing device streaming for ultrasound and otoscope feeds. I also implemented ad-hoc consent forms and in-app secure payments, ensuring a seamless experience across iOS and Android with Zustand for efficient state management.",
      type: "mobile",
      apple: "https://apps.apple.com/us/app/vsee-clinic-for-patient/id1174048494",
      google: "https://play.google.com/store/apps/details?id=com.vsee.clinic.release&hl=en_US",
    },
    {
      imgPath: fintron,
      title: "FinTron Investment App",
      description: "FinTron is a personal finance app that helps users track their spending, investments, and banking transactions.",
      contribution: "Developed the mobile app with React Native and Redux, implementing real-time transaction syncing with WebSockets and Firebase. I integrated secure authentication via OAuth 2.0 and biometric login, enhanced transaction visualizations using D3.js, and improved app reliability with Redux Thunk and Sentry.",
      type: "mobile",
      apple: "#",
      google: "#",
    },
    {
      imgPath: robinhood,
      title: "Robinhood: Trading & Investing",
      description: "Robinhood is a commission-free stock and crypto trading app that allows users to buy, sell, and trade financial assets with a focus on simplicity and accessibility.",
      contribution: "Enhanced both the Android and iOS apps by developing native features using Java for Android and Swift for iOS, ensuring smooth navigation and real-time trading updates. I worked on improving transaction speeds and stability, implemented secure authentication via OAuth 2.0 and biometrics, and optimized performance using native state management solutions. Additionally, I contributed to the integration of new financial instruments and improved error tracking with Sentry.",
      type: "mobile",
      google: "https://play.google.com/store/apps/details?id=com.robinhood.android&hl=en_US",
      apple: "https://apps.apple.com/us/app/robinhood-trade-btc-sol-eth/id938003185",
    },
    {
      imgPath: tango,
      title: "Tango Website",
      description: "Tango is a full-stack construction management platform built to connect on-site operations with project tracking, client communication, and budgeting. It uses the MERN stack to manage live records, updates, and dynamic UI elements to streamline construction project workflows and collaboration.",
      contribution: "Developed and contributed to the platform by building features such as project tracking, client communication portals, and inventory management. I utilized MongoDB for live data storage, Express.js for API development, React for the front-end user interface, and Node.js for backend services. I also worked on integrating real-time data syncing, notifications, and file uploads to enhance on-site operations.",
      type: "web",
      demoLink: "https://www.tango.io/",
    },
  ];

  // State for search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on — filter by type or search by name.
        </p>

        {/* 🔍 Search + Filter */}
        <div className="project-filters" style={{ position: "relative", zIndex: 10 }}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "relative", zIndex: 10 }}
          />
          <div className="filter-buttons" style={{ position: "relative", zIndex: 10 }}>
            <button
              className={filter === "all" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("all")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              All
            </button>
            <button
              className={filter === "mobile" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("mobile")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Mobile
            </button>
            <button
              className={filter === "web" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("web")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Web
            </button>            
          </div>
        </div>

        {/* Project Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;