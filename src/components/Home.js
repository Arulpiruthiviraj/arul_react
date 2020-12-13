import React from "react";
import mainProPic from "../assets/images/mainProPic.png";
import cvBackgroundHexPic from "../assets/images/cv.png";
import projectsBackgroundHexPic from "../assets/images/projects.png";
import blogBackgroundHexPic from "../assets/images/blog.png";
import { Carousel, Col, Row, Container, Button } from "react-bootstrap";
import "../assets/css/backGroundWave.css";

function Home() {
  return (
    <Container style={{ marginTop: 60 }}>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Row>
        <Col sm={6}>
          <img
            src={mainProPic}
            width={"100%"}
            height={"100%"}
            style={{ border: "none" }}
          />
        </Col>
        <Col sm={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cvBackgroundHexPic}
                alt="First slide"
                style={{ border: "none" }}
              />

              <Carousel.Caption>
                <h3>
                  I'm <br /> Arulpiruthiviraj
                </h3>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1Iu038ypjyFrkDSkYcwm8EV_IKclh82YZ/view?usp=sharing"
                  className="btn btn-outline-primary"
                  role="button"
                  aria-pressed="true"
                >
                  View CV
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={projectsBackgroundHexPic}
                alt="Third slide"
                style={{ border: "none" }}
              />

              <Carousel.Caption>
                <h3>
                  Love <br /> Making Small Projects
                </h3>
                <a
                  target={"_blank"}
                  href="https://github.com/Arulpiruthiviraj?tab=repositories"
                  className="btn btn-outline-primary"
                  role="button"
                  aria-pressed="true"
                >
                  View Projects
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={blogBackgroundHexPic}
                alt="Third slide"
                style={{
                  boxShadow: " 0 0 8px 8px white inset",
                  border: "radial-gradient(transparent 20%, white 70%)",
                }}
              />

              <Carousel.Caption>
                <h3>I do write Articles</h3>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://medium.com/@aprprasanth"
                  className="btn btn-outline-primary"
                  role="button"
                  aria-pressed="true"
                >
                  View Blog
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
