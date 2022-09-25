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
	// const [error, setError] = useState('');
	const dispatch = useDispatch();

	const getProducts = () => {
		// try {
		let searchQuery = query.get('q') || '';
		dispatch(productAction.getProducts(searchQuery));

		// 	if (data.length < 1) {
		// 		if (searchQuery !== '') {
		// 			setError(`${searchQuery}와 일치하는 상품이 없습니다`);
		// 		} else {
		// 			throw new Error('결과가 없습니다');
		// 		}
		// 	}
		// } catch (err) {
		// 	setError(err.message);
		// }
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return (
		<>
			<Container>
				{/* {error ? (
					<Alert variant="danger" className="text-center">
						{error}
					</Alert>
				) : ( */}
				<Row>
					{productList.length > 0 &&
						productList.map((product) => (
							<Col md={3} sm={12} key={product.id}>
								<ProductCard product={product} />
							</Col>
						))}
				</Row>
				{/* )} */}
			</Container>
		</>
	);
};

export default Products;
