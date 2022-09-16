import React from 'react';
import { menuList } from './Navbar';
import styled from 'styled-components';

const Sidebar = ({ active }) => {
	const closeSidebar = () => {
		active(false);
	};

	return (
		<Container sidebar={active}>
			<Close onClick={closeSidebar}>&times;</Close>
			{menuList.map((menu, idx) => (
				<Content>
					<MenuBtn key={idx}>{menu}</MenuBtn>
				</Content>
			))}
		</Container>
	);
};

const Container = styled.div`
	width: 250px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: ${(props) => (props.sidebar ? '0' : '-100%')};
	background-color: burlywood;
	animation: showSidebar 0.4s;
	z-index: 2;

	@keyframes showSidebar {
		from {
			opacity: 0;
			width: 0;
		}
		to {
			opacity: 1;
			width: 250px;
		}
	}
`;

const Close = styled.button`
	margin: 10px 25px;
	font-size: 30px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 50px;
`;

const MenuBtn = styled.button`
	color: #fff;
	&:hover,
	&:active {
		color: red;
	}
`;

export default Sidebar;
