import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import styled from '@emotion/styled';
import { Link, Element } from 'react-scroll';

import Header from './components/Header';
// import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0277bd',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const Main = styled(Container)`
  padding-top: 10px; /* Add padding to account for Header height */
  padding-bottom: 10px;
`;

const SectionWrapper = styled.div`
  padding-top: 100px; /* Add padding to account for Header height */
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <Hero /> */}
      <Main maxWidth="lg">
        <SectionWrapper>
          <Element name="about" className="element">
            <About />
          </Element>
        </SectionWrapper>
        <SectionWrapper>
          <Element name="experience" className="element">
            <Experience />
          </Element>
        </SectionWrapper>
        <SectionWrapper>
          <Element name="skills" className="element">
            <Skills />
          </Element>
        </SectionWrapper>
        <SectionWrapper>
          <Element name="projects" className="element">
            <Projects />
          </Element>
        </SectionWrapper>
        <SectionWrapper>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </SectionWrapper>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
