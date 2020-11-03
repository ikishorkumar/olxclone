import React, { Component } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

export class Olx extends Component {
	render() {
		return (
			<Container>
				<div>
					<Header />
				</div>
				<div>
					<MainBody />
				</div>
				<div>
					<Footer />
				</div>
			</Container>
		);
	}
}

export default Olx;
