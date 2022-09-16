import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const Products = () => {
	const [productList, setProductList] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [query, setQuery] = useSearchParams();
	const [error, setError] = useState('');

	const getProducts = async () => {
		try {
			let searchQuery = query.get('q') || '';
			let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products?q=${searchQuery}`;
			let response = await fetch(url);
			let data = await response.json();
			if (data.length < 1) {
				if (searchQuery !== '') {
					setError(`${searchQuery}와 일치하는 상품이 없습니다`);
				} else {
					throw new Error('결과가 없습니다');
				}
			}
			setProductList(data);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<>
			<Container>
				{error ? (
					<Alert variant="danger" className="text-center">
						{error}
					</Alert>
				) : (
					<Row>
						{productList.length > 0 &&
							productList.map((product) => (
								<Col md={3} sm={12} key={product.id}>
									<ProductCard product={product} />
								</Col>
							))}
					</Row>
				)}
			</Container>
		</>
	);
};

export default Products;
