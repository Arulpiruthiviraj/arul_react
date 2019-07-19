import React from 'react'
import mainProPic from "../assets/images/mainProPic.png";
import backgroundHexPic from "../assets/images/999999.png";
import {Carousel,Col,Row,Container,Button} from "react-bootstrap";

function Home() {
 
    return (
        <Container style={{marginTop:60}}>
            <Row>
                <Col sm={6}>
                    <img src={mainProPic} width={"100%"} height={"100%"}/>
                </Col>
                <Col sm={6}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={backgroundHexPic}
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                <h3>I'm <br/> Arulpiruthiviraj</h3>
                                <a target={"_blank"} href="https://drive.google.com/file/d/1QXedPDF3KyL_ex3eOtbmn-7aYE3WQls5/view?usp=sharing" className="btn btn-outline-secondary" role="button" aria-pressed="true">
                                    View CV
                                </a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={backgroundHexPic}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>I'm <br/> Arulpiruthiviraj</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={backgroundHexPic}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
