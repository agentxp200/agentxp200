import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              I fell in love with cybersecurity, drawn to the challenge of protecting digital systems from ever-evolving threats. While still learning, I’ve built a solid foundation and continue to grow every day.  <i>
                <b className="purple"> I think… 🤷‍♂️</b>
              </i>
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Splunk, Python, metasploit, Burpsuite, C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are learning new&nbsp;
              <i>
                <b className="purple">Secure technologies and solutions </b>
              </i> and
                maintaining efficient SOC operations for{" "}
                <b className="purple">
              <i>proactive security.</i>
                </b>
              
              <br />
              <br />
              Passionate about strengthening security defenses, with skills in 
              <i><b className="purple"> threat intelligence, </b> 
              
                <b className="purple">
                  {" "}
                  SIEM, incident response, 
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> vulnerability management.</b>
              </i>
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
                  href="https://github.com/ajazxmhd55"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ajazxmhd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammedajaz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ajazxmhd?igsh=NGIxeTAzYm5ndmI0"
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
