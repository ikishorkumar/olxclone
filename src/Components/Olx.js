import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import MainBody from './MainBody';

export class Olx extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Header />
				</Row>
				<Row>
					<MainBody />
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		);
	}
}

export default Olx;
