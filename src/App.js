import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import styled from '@emotion/styled';
import { Link, Element } from 'react-scroll';

import Header from './components/Header';
import Hero from './components/Hero';
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
  padding-top: 40px;
  padding-bottom: 40px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Main maxWidth="lg">
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="experience" className="element">
          <Experience />
        </Element>
        <Element name="skills" className="element">
          <Skills />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
