import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsApple, BsGooglePlay } from "react-icons/bs";

function ProjectCards(props) {
  console.log(props);
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt={`${props.title} preview`}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.contribution}
          </Card.Text>
        
        <div style={{ 
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px"
        }}>
          {props.type === "mobile" ? (
            <>
          <Button 
            variant="primary" 
            href={props.google} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 10
            }}
          >
            <BsGooglePlay size={18} />
            <span style={{ marginLeft: "8px" }}>
              Google Play
            </span>
          </Button>

          <Button 
            variant="primary" 
            href={props.apple} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 10
            }}
          >
            <BsApple size={18} />
            <span style={{ marginLeft: "8px" }}>
              Apple Store
            </span>
          </Button>
          </>
          ) : (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite size={18} />
              <span style={{ marginLeft: "8px" }}>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;