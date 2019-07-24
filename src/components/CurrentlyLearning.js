import React, { useState,useEffect} from "react";
import {skillsDataLearning} from "./skillData";
import {Card} from "react-bootstrap";
import {TimelineLite} from "gsap/all";


function CurrenlyLearning() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));
    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
    t1.play();

    return (
        <>
            { skillsDataLearning.map((element, index) => (
                <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 card-element"
                    ref={div => cards[index] = div}
                >
                    <Card bg="secondary" text="white" style={{ width: '18rem' ,height:"11rem"}} >
                        <Card.Header align={"center"}>{element.name}</Card.Header>
                        <Card.Link href={element.framework_link} target={"_blank"}>
                            <Card.Img variant="top" className={element.anime_class} alt="logo" src={element.logo} height={100} width={100}/>
                        </Card.Link>
                    </Card>
                    <br/>
                </div>
            ))}

        </>
    );

}

export default CurrenlyLearning;