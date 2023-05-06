import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume-container'>
      <h1 className='resume-header'>Arul Arunthavaraja</h1>
      <p className='resume-text'>
        302 - 150 Leeward Glenway, North York, ON M3C 2Y9
      </p>
      <p className='resume-text'>
        arulpiruthiviraj.com | Arulpiruthiviraj | arulpiruthiviraj |
        arul00016@gmail.com | +1-226-260-9520
      </p>
      <h2 className='resume-subheader'>EXPERIENCE</h2>
      <div className='resume-job'>
        <p className='resume-job-title'>TD Bank | IT Developer III</p>
        <p className='resume-job-date'>Jan 2022 – Present | Toronto, ON</p>
        <ul className='resume-list'>
          <li>
            Designed and implemented credit platform products for mortgage
            applications, streamlining the underwriting process and making it
            more efficient for end users.
          </li>
          <li>
            Developed and maintained single page applications for credit
            products using Angular, NgRx, and React.
          </li>
          <li>Technologies used: Angular, Spring Boot, NgRx, React.</li>
        </ul>
      </div>
      <div className='resume-job'>
        <p className='resume-job-title'>DAVINCI RETAIL | Front End Developer</p>
        <p className='resume-job-date'>Feb 2021 – Dec 2021 | Toronto, ON</p>
        <ul className='resume-list'>
          <li>
            Worked in a team to develop an updated version of Davinci Retail's
            applications using React (NextJS) for the frontend and maintaining
            the existing ones that are developed using AngularJS and Angular.
            Also did backend support tickets using the Spring Boot framework.
          </li>
          <li>Technologies used: React, NextJS, Angular, Spring Boot.</li>
        </ul>
      </div>
      <div className='resume-job'>
        <p className='resume-job-title'>
          MUQO APP | Application Developer (Internship)
        </p>
        <p className='resume-job-date'>Sep 2020 – Jan 2021 | Toronto, ON</p>
        <ul className='resume-list'>
          <li>
            Developed a full-stack website for Muqo App's influencers as the
            sole developer. This involved using React and NodeJS to create a
            public website for influencers and an admin panel to view, change,
            and delete records of exclusive App's users. Integrated with MongoDB
            database, set up templates for further expansion of the application,
            and provided testing and documentation.
          </li>
          <li>
            The tool made analysis of App's users data easy by using smoother UI
            and cleaner visual metrics.
          </li>
          <li>Technologies used: NodeJS, MongoDB, React, Redux, Heroku.</li>
        </ul>
      </div>
      <div className='resume-job'>
        <p className='resume-job-title'>CEYMPLON | Full Stack Developer</p>
        <p className='resume-job-date'>
          Feb 2019 – Aug 2019 | Jaffna, Sri Lanka
        </p>
        <ul className='resume-list'>
          <li>
            Developed web applications using React, NodeJS, Express, and
            MongoDB.
          </li>
          <li>
            Created RESTful APIs to allow data exchange between the server and
            the client.
          </li>
          <li>Technologies used: React, NodeJS,xpress, MongoDB.</li>
        </ul>
      </div>
      <h2 className='resume-subheader'>EDUCATION</h2>
      <div className='resume-job'>
        <p className='resume-job-title'>
          Master of Electrical and Computer Engineering | University of Windsor
        </p>
        <p className='resume-job-date'>
          September 2019 – Dec 2020 | Windsor, ON
        </p>
        <ul className='resume-list'>
          <li>
            Relevant courses: Advanced Computer Architecture, Digital Signal
            Processing, VLSI Design, Wireless Communication Systems, Power
            Electronics.
          </li>
        </ul>
      </div>
      <div className='resume-job'>
        <p className='resume-job-title'>
          Bachelor of Science in Computer Science | University of Toronto
        </p>
        <p className='resume-job-date'>Sep 2017 – Apr 2021 | Toronto, ON</p>
        <ul className='resume-list'>
          <li>Graduated with distinction.</li>
          <li>
            Relevant courses: Software Design, Data Structures and Algorithms,
            Web Systems and Technologies, Database Systems, Computer Networks,
            Operating Systems.
          </li>
        </ul>
      </div>
      <h2 className='resume-subheader'>SKILLS</h2>
      <ul className='resume-list'>
        <li>
          Proficient in JavaScript, React, Angular, NodeJS, Express, MongoDB,
          HTML, CSS, Spring Boot.
        </li>
        <li>Experience with Agile development methodologies.</li>
        <li>Strong analytical and problem-solving skills.</li>
        <li>Excellent verbal and written communication skills.</li>
      </ul>
    </div>
  );
};

export default Resume;
