import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container,Row,Col} from 'react-bootstrap'
import '../style.css'
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/skills', name: 'Skills', Component: Home },
    { path: '/timeline', name: 'Timeline', Component: About },
    { path: '/blog', name: 'Blog', Component: About },
    { path: '/contact', name: 'Contact', Component: Contact},
];

export default function Routes() {
    return (
        <Router>
            <>
                <Container>
                    <NavBar routes={routes}/>
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
    )
}
