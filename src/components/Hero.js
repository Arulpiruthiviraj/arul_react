import React from 'react';
import { css } from '@emotion/react';
import heroImage from '../assets/images/arul_main.jpeg';

const Hero = () => {
  return (
    <div css={heroContainer}>
      <img src={heroImage} alt="Hero" css={heroImageStyles} />
      <div css={heroTextContainer}>
        <h1 css={heroTitle}>Arul Arunthavaraja</h1>
        <p css={heroSubtitle}>Full Stack Developer</p>
        <button css={heroButton}>Contact Me</button>
      </div>
    </div>
  );
};

// Emotion styles
const heroContainer = css`
  position: relative;
  height: 50vh;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const heroImageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const heroTextContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const heroTitle = css`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const heroSubtitle = css`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const heroButton = css`
  padding: 1rem 2rem;
  background-color: #FF6C37;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f55d30;
  }
`;

export default Hero;
