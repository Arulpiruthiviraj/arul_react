import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container } from "react-bootstrap";
import "../assets/css/style.css";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skill";
import ScrollToTop from "../components/ScrollToTop";
import Resume from "../components/resume/Resume";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/skills", name: "Skills", Component: Skills },
  { path: "/timeline", name: "Timeline", Component: TimeLine },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/resume", name: "Resume", Component: Resume }
];

export default function Routes() {
  return (
    <Router>
      <>
        <ScrollToTop />

        <Container>
          <NavBar routes={routes} />
        </Container>
        <Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </>
    </Router>
  );
}
