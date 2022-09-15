import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/products/${product.id}`);
	};

	return (
		<Card onClick={showDetail}>
			<ProductImage src={product?.img} />
			<Choice>{product?.choice === true ? 'Conscious Choice' : ''}</Choice>
			<ProductName>{product?.title}</ProductName>
			<ProductPrice>₩{product?.price}</ProductPrice>
			<ProductArrival>{product?.new === true ? 'New' : ''}</ProductArrival>
		</Card>
	);
};

const Card = styled.div`
	position: relative;
	width: 260px;
	height: 535px;

	&:hover {
		transform: scale(1.1);
	}
`;

const ProductImage = styled.img`
	width: 100%;
	height: 396px;
`;

const Choice = styled.p`
	position: absolute;
	top: 405px;
	font-size: 12px;
	color: rgb(49, 127, 105);
`;

const ProductName = styled.h3`
	position: absolute;
	top: 425px;
	font-size: 16px;
`;

const ProductPrice = styled.p`
	position: absolute;
	top: 445px;
	font-size: 16px;
`;

const ProductArrival = styled(ProductPrice)`
	top: 465px;
`;

export default ProductCard;
