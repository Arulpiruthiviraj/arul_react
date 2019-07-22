import React, { useState,useEffect} from "react";
import {skillsDataFrameworks} from "./skillData";
import {Card} from "react-bootstrap";
import {TimelineLite} from "gsap/all";


function FrameWorkSkills() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));
    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
    t1.play();

    return (
        <>
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

        </>
    );

}

export default FrameWorkSkills;