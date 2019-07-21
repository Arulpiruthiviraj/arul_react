import React, { useState,useEffect } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { skillsDataFrameworks } from "./skillData"
import { skillsDataLanguages } from "./skillData"
import { skillsDataLearning } from "./skillData"
import Container from "react-bootstrap/Container";


function Skills() {
    const [cards,setCards]=useState([]);
    const [t1,setT1]=useState(new TimelineLite({ play: true }));

    useEffect(() => {
        t1.staggerTo( cards , 0.5, { autoAlpha: 1, y: -40 }, 0.1);
    });
     t1.play();

    return (
        <Container style={{marginTop:60}}>
            <h3>These are my skills</h3>
            <div className="row ">
                { skillsDataLanguages.map((element, index) => (
                    console.log(index),
                        <div
                            key={element.id}
                            className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => cards[index] = div}
                        >

                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="media">
                                        <img
                                            className="mr-3"
                                            src="https://via.placeholder.com/64"
                                            alt="Generic placeholder image"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">{element.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
            <div className="row ">
                { skillsDataFrameworks.map((element, index) => (
                        <div
                            key={element.id}
                            className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => cards[index] = div}
                        >
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="media">
                                        <img
                                            className="mr-3"
                                            src="https://via.placeholder.com/64"
                                            alt="Generic placeholder image"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">{element.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
            <div className="row ">
                { skillsDataLearning.map((element, index) => (
                        <div
                            key={element.id}
                            className="col-12 col-sm-6 col-md-4 card-element"
                            ref={div => cards[index] = div}
                        >
                            <div className="card mt-3">
                                <div className="card-body">
                                    <div className="media">
                                        <img
                                            className="mr-3"
                                            src="https://via.placeholder.com/64"
                                            alt="Generic placeholder image"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">{element.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </Container>

    );
}

export default Skills;