import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const Detail = () => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	let { id } = useParams();

	const getProductDetail = async () => {
		setLoading(true);
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		setLoading(false);
		setProduct(data);
	};

	useEffect(() => {
		getProductDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading || product === null) return <h2>Loading...</h2>;

	return (
		<Wrapper>
			<ProductImage src={product?.img} />
			<Content>
				<Title>{product?.title}</Title>
				<Price>₩{(product?.price).toLocaleString()}</Price>
				<Choice>{product?.choice === true ? 'Customer Choice' : ''}</Choice>
				<DropdownButton
					as={ButtonGroup}
					key="outline-danger"
					id="dropdown-variants-danger"
					variant="outline-danger"
					title="사이즈 선택"
					style={{ width: '100px', margin: '10px 0' }}
				>
					<Dropdown.Item eventKey="1">S - Small</Dropdown.Item>
					<Dropdown.Item eventKey="2">M - Medium</Dropdown.Item>
					<Dropdown.Item eventKey="3">L - Large</Dropdown.Item>
				</DropdownButton>
				<ToCart type="submit">추가</ToCart>
			</Content>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	display: flex;
	gap: 20px;
`;

const ProductImage = styled.img`
	width: 45%;
	height: 450px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 55%;
`;

const Title = styled.h1`
	font-size: 20px;
	font-weight: bold;
`;

const Price = styled.h3`
	font-size: 20px;
	font-weight: normal;
`;

const Choice = styled.p`
	color: rgb(49, 127, 105);
	font-size: 14px;
`;

const ToCart = styled.button`
	width: 100%;
	margin-top: 20px;
	padding: 5px;
	border-radius: 5px;
	background-color: #000;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
`;

export default Detail;
