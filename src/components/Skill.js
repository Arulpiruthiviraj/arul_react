import React, { useState,useEffect } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { skillsDataFrameworks } from "./skillData"
import { skillsDataLanguages } from "./skillData"
import { skillsDataLearning } from "./skillData"
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import "../assets/css/LogoAnime.css"
import LanguageSkills from "./LanguageSkills";
import {CSSTransition} from "react-transition-group";
import FrameWorkSkills from "./FrameWorkSkills";

function Skills() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));
    const [frameworkShow,setFrameworkShow]=useState(true);
    const [languagesShow,setLanguagesShow]=useState(false);

    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
     t1.play();

     const openFrameworks=()=>{
         setFrameworkShow(true);
         setLanguagesShow(false);
     };
     const openLanguages=()=>{
         setLanguagesShow(true);
         setFrameworkShow(false);

     };

    return (
        <Container style={{marginTop:60}}>
            <Container>
                <Row>
                    <Col>
                        <Card bg="secondary" text="white" className="text-center">
                            <Card.Header>
                                <Button variant="secondary" onClick={openFrameworks}>Frameworks and Technologies</Button>
                                <Button variant="secondary" onClick={openLanguages}>Languages</Button>
                                <Button variant="secondary">Currently Learning</Button>
                            </Card.Header>
                        </Card>
                        <br/>
                        <br/>
                        <br/>
                    </Col>
                </Row>
            </Container>
            <Container>
                { frameworkShow ?(
                    <Container>
                    <div className="row ">
                        <FrameWorkSkills/>
                    </div>
                    <br/>
                    <br/>
                </Container>):("")}
                <Container>
                    { languagesShow ?(
                        <Container>
                            <div className="row ">
                                <LanguageSkills/>
                            </div>
                            <br/>
                            <br/>
                        </Container>):("")}
                </Container>
            </Container>
        </Container>

    );
}

export default Skills;