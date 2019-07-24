import React,{useState,useEffect} from 'react';
import {skillsDataFrameworks, skillsDataLanguages} from "./skillData";
import {Card} from "react-bootstrap";
import {TimelineLite} from "gsap/all";

function LanguageSkills() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));
    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
    t1.play();

    return (
        <>
            { skillsDataLanguages.map((element, index) => (
                <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 card-element"
                    ref={div => cards[index] = div}
                >
                        <Card.Img variant="top" alt="logo" src={element.logo} height={100} width={100}/>
                    <br/>
                    <br/>
                </div>
            ))}

        </>
    );

}

export default LanguageSkills;