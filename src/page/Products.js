import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const Products = ({ auth }) => {
	const [productList, setProductList] = useState([]);

	const getProducts = async () => {
		let url = `http://localhost:8000/products`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<>
			<Container>
				<Row>
					{productList.map((product) => (
						<Col lg={3}>
							<ProductCard key={product.id} product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Products;
