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
			<ProductPrice>₩{(product?.price).toLocaleString()}</ProductPrice>
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

	@media (max-width: 63rem) {
		width: 190px;
		height: 450px;
	}
`;

const ProductImage = styled.img`
	width: 100%;
	height: 396px;

	@media (max-width: 63rem) {
		height: 74%;
	}
`;

const Choice = styled.p`
	position: absolute;
	top: 76%;
	font-size: 12px;
	color: rgb(49, 127, 105);
`;

const ProductName = styled.h3`
	position: absolute;
	top: 80%;
	font-size: 16px;
`;

const ProductPrice = styled.p`
	position: absolute;
	top: 83.5%;
	font-size: 16px;
`;

const ProductArrival = styled(ProductPrice)`
	top: 87.5%;
`;

export default ProductCard;
