import React, { Component } from 'react';
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap';

export class ProductList extends Component {
	render() {
		return (
			<Container>
				<h1> Product List here</h1>
				<Row xs={2} md={4} lg={6}>
					<Col>
						<Product />
					</Col>
					<Col>
						<Product />
					</Col>
					<Col>
						<Product />
					</Col>
					<Col>
						<Product />
					</Col>
					<Col>
						<Product />
					</Col>
					<Col>
						<Product />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ProductList;
