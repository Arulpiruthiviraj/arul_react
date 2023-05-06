import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import styled from '@emotion/styled';

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
      <Header />
      {/* <Hero /> */}
      <Main maxWidth="lg">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
