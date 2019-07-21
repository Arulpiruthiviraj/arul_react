import React, {Fragment} from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


function TimeLine() {
    return (
        <div style={{marginTop:80}}>
            <h3 align="center" >My Path</h3>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="02/2019 – Present"
                    style={{ color: '#e86971' }}
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Associate Software Engineer, Ceymplon</h3>
                    <p>
                        As a Associate Software Engineer in Ceymplon,
                        I worked in open source technologies particularly iin web developemen
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="07/2013 – 05/2017"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>Student, Sathyabama University</h3>
                    <h5 style={{ color: '#58aefe' }}>BE,Electronics and Communication Engineering</h5>
                    <p>
                        I studied Electronics and communication Engineering and designed a microstrip patch Antenna as a
                        final year product.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateComponent={(
                        <div
                            style={{
                                display: 'block',
                                float: 'left',
                                padding: '10px',
                                background: 'rgb(150, 150, 150)',
                                color: '#fff',
                            }}
                        >
                            11/2008 – 04/2009
                        </div>
                    )}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="08/2008 – 11/2008"
                    dateInnerStyle={{ background: '#76bb7f' }}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                    <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                    </p>
                </TimelineItem>
            </Timeline>

        </div>
    );

}


export default TimeLine;