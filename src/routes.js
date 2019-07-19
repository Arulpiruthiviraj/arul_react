import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {Home} from "./components/Home";
import {Services} from "./components/About";
import {Contact} from "./components/Contact";
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav from 'react-bootstrap/Nav';

// components


class Routes extends Component {

	render(){
		return <div className="container">

			<BrowserRouter>
				<div className="row">

					{/* MENU */}
					<nav className="col-12">

					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/services">Services</Nav.Link>
								<Nav.Link href="#pricing">Pricing</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					</nav>
					<nav className="col-12">
						<Link className="btn gsap-btn mr-2" to="/">Home</Link>
						<Link className="btn gsap-btn mr-2" to="/services">Services</Link>
						<Link className="btn gsap-btn" to="/contact">Contact</Link>
					</nav>

					{/* CONTENT */}
					<div className="col-12">
						<Route path="/" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>

						<Route path="/services">
							{ ({ match }) => <Services show={match !== null} /> }
						</Route>
						<Route path="/contact">
							{ ({ match }) => <Contact show={match !== null} /> }
						</Route>
					</div>

				</div>
			</BrowserRouter>

		</div>;
	}

}

export default Routes;
