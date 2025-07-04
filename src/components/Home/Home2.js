import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vssavtar.png";
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
          <div className="d-flex  home-about-description">
            <div>
              <Col md={11} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m Vansh Shah, a passionate <b className="purple">Full Stack Developer</b> who loves creating clean and functional web applications.
                <br />
                <br />
                I'm skilled in
                <i>
                  <b className="purple"> React.js, Next.js, Node.js, Express.js, and MongoDB</b>
                </i>
                <br />
                <br />
                I enjoy working on &nbsp;
                <i>
                  <b className="purple">Web Technologies</b> and building scalable & impactful{" "}
                  <b className="purple">Products</b>.
                </i>
                <br />
                <br />
                I also love to build with the <b className="purple">MERN Stack</b> and am always learning and improving my craft with modern libraries and frameworks.
              </p>
              </Col>
            </div>
            <div className="myAvtar">
              {/* <Col md={12} className="myAvtar"> */}
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
              {/* </Col> */}
            </div>
          </div>
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
                  href="https://github.com/Vanshshah2325"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com" // Add your Twitter link if you have one
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vansh-shah-632757244/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com" // Add your Instagram link if you want
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
