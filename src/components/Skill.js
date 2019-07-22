import React, { useState,useEffect } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { skillsDataFrameworks } from "./skillData"
import { skillsDataLanguages } from "./skillData"
import { skillsDataLearning } from "./skillData"
import {Container,Row,Col,Card} from "react-bootstrap";
import "../assets/css/LogoAnime.css"

function Skills() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));

    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
     t1.play();

    return (
        <Container style={{marginTop:60}}>
            <Row>
                <Col xs={12} md={1}>
                    <Card bg="secondary" text="white" style={{ width: '50rem' }}>
                        <Card.Header>Frameworks and Technologies</Card.Header>
                    </Card>
                    <br/>
                </Col>
            </Row>
            <div className="row ">
                { skillsDataFrameworks.map((element, index) => (
                        <div
                            key={element.id}
                            className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => cards[index] = div}
                        >
                            <Card bg="secondary" text="white" style={{ width: '18rem' ,height:"18rem"}} >
                                <Card.Header>{element.name}</Card.Header>
                                <Card.Link href={element.framework_link} target={"_blank"}>
                                    <Card.Img variant="top" className={element.anime_class} alt="logo" src={element.logo} height={100} width={100}/>
                                </Card.Link>
                                <Card.Body >
                                    <Card.Text  >
                                        {element.secondaryTitle}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                        </div>
                    ))}
            </div>
            <br/>
            <Row>
                <Col xs={12} md={1}>
                    <Card bg="secondary" text="white" style={{ width: '50rem' }}>
                        <Card.Header>Frameworks and Technologies</Card.Header>
                    </Card>
                    <br/>
                </Col>
            </Row>
            <br/>
            <div className="row ">
                { skillsDataLanguages.map((element, index) => (
                        <div
                            key={element.id}
                            className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => cards[index] = div}
                        >
                            <Card bg="secondary" text="white" style={{ width: '18rem' ,height:"18rem"}} >
                                <Card.Header>{element.name}</Card.Header>
                                <Card.Link href={element.framework_link} target={"_blank"}>
                                    <Card.Img variant="top" className={element.anime_class} alt="logo" src={element.logo} height={100} width={100}/>
                                </Card.Link>
                                <Card.Body >
                                    <Card.Text  >
                                        {element.secondaryTitle}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                        </div>
                    ))}
            </div>
        </Container>

    );
}

export default Skills;