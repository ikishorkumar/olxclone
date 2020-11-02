import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from './Banner';
import ProductList from './ProductList';

export class MainBody extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Banner />
				</Row>
				<Row>
					<ProductList />
				</Row>
			</Container>
		);
	}
}

export default MainBody;
