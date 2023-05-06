import React from 'react';
import styled from '@emotion/styled';

const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

const AboutSectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

const AboutSectionContent = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  max-width: 800px;
`;

const About = () => {
  return (
    <AboutSectionContainer>
      <AboutSectionTitle>About Me</AboutSectionTitle>
      <AboutSectionContent>
        Hi there, my name is Arul Arunthavaraja. I am a full-stack developer with several years of experience in building web and mobile applications. I have worked with various technologies such as React, Angular, NodeJS, MongoDB, and AWS to develop efficient and user-friendly applications.
        In my free time, I enjoy exploring new technologies, contributing to open-source projects, and reading books on software engineering and architecture.
      </AboutSectionContent>
    </AboutSectionContainer>
  );
};

export default About;
