import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vansh Shah</span>
            &nbsp;from <span className="purple">Ahmedabad, India.</span>
            <br />
            I am a Full Stack Developer with hands-on experience in the MERN stack.
            <br />
            I hold a Bachelor's degree in Information Technology and have completed a full-stack internship at Ker Infotech.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing in my free time:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Tech & Startup Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling with Friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building, keep learning — one project at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Vansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
