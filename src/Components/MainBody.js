import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from './Banner';
import ProductList from './ProductList';
import './MainBody.css';
export class MainBody extends Component {
	render() {
		return (
			<>
				<ProductList />
			</>
		);
	}
}

export default MainBody;
