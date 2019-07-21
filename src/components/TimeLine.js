import React  from 'react';
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
                        I worked in open source technologies particularly in web developement and to achieve my tasks ,I
                        utilised Laravel(php) and React frameworks.
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
                    <h3>Student, Sathyabama University</h3>
                    <h5>Studied  </h5>
                    <p>
                        I studied Electronics and communication Engineering and designed a microstrip patch Antenna as my
                        final year product.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="07/2015 – 11/2016"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Teacher(Volunteer), Sathyabama University</h3>
                    <p>
                        As part of Sathyabama University Earn while Learn Program,I volunteered to teach slum area students
                        of Thuraippakkam,Chennai.Further, we conducted many educational awarenesss program to adults also
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="06/2011 – 05/2013"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Student, St.Joseph's Higher Secondary School,Cuddalore</h3>
                    <p>
                       I did my secondary education(11-12th) in the field of Bio-maths
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="11/2008 – 05/2011"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Student, Mudhaliyarkuppam Government High School School,Villuppuram</h3>
                    <p>
                       Studied 8th to 10th Std here
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="07/2000 – 11/2008"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Student, Nachikuda Tamil Mixed School,Nachikuda,Kilinochi</h3>
                    <p>
                       did my primary schooling and my early education
                    </p>
                </TimelineItem>

            </Timeline>

        </div>
    );

}


export default TimeLine;