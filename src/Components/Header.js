import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Container,
	Row,
	InputGroup,
	NavbarBrand,
	NavItem,
} from 'react-bootstrap';
import './Header.css';
import logo from '../Images/olxlogo.png';
import plusIcon from '../Images/plus-solid.svg';

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
export class Header extends Component {
	render() {
		return (
			<div id="header">
				<div id="headerbar">
					<Navbar>
						<NavbarBrand>
							<a>
								<img src={logo} width="48px" height="48px" />
							</a>
						</NavbarBrand>
						<div>
							<Nav className="mr-auto">
								<NavItem href="#home">Home</NavItem>
								<NavItem href="#features">Features</NavItem>
							</Nav>
						</div>
						<Nav>
							<NavItem>
								<span>
									<button>Login</button>
								</span>
							</NavItem>
							<NavItem eventKey={2} href="#memes">
								<span>
									<span>
										<a href="#">
											<img src={plusIcon} width="15.6px" height="15.6px" />
										</a>
									</span>
									<span>SELL</span>
								</span>
							</NavItem>
						</Nav>
					</Navbar>
				</div>
			</div>
		);
	}
}

export default Header;
