import React, { useState,useEffect } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { skillsDataFrameworks } from "./skillData"
import { skillsDataLanguages } from "./skillData"
import { skillsDataLearning } from "./skillData"
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import "../assets/css/LogoAnime.css"
import LanguageSkills from "./LanguageSkills";

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
                        { skillsDataFrameworks.map((element, index) => (
                            <div
                                key={index}
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
                    <br/>
                </Container>):("")}
                <Container>
                        { languagesShow ?(<LanguageSkills/>)
                            :("dfdf")}
                </Container>
            </Container>
        </Container>

    );
}

export default Skills;