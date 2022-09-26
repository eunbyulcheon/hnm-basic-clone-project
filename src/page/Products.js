import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
	const productList = useSelector((state) => state.product.productList);
	// eslint-disable-next-line no-unused-vars
	const [query, setQuery] = useSearchParams();
	const dispatch = useDispatch();

	const getProducts = () => {
		let searchQuery = query.get('q') || '';
		dispatch(productAction.getProducts(searchQuery));
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<>
			<Container>
				<Row>
					{productList.length > 0 &&
						productList.map((product) => (
							<Col md={3} sm={12} key={product.id}>
								<ProductCard product={product} />
							</Col>
						))}
				</Row>
			</Container>
		</>
	);
};

export default Products;
