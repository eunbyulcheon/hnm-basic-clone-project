import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Navbar = () => {
	const menuList = [
		'여성',
		'Divided',
		'남성',
		'신생아/유아',
		'아동',
		'H&M Home',
		'Sale',
		'지속가능성',
	];

	return (
		<>
			<LoginButton>
				<FontAwesomeIcon icon={faUser} />
				<Login>Login</Login>
			</LoginButton>

			<NavSection>
				<Logo src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" />
			</NavSection>

			<MenuSection>
				<MenuBar>
					{menuList.map((menu) => (
						<MenuItem>{menu}</MenuItem>
					))}
				</MenuBar>
				<SearchBar>
					<SeachIcon>
						<FontAwesomeIcon icon={faSearch} />
					</SeachIcon>
					<SearchInput type="text" placeholder="제품 검색" />
				</SearchBar>
			</MenuSection>
		</>
	);
};

const LoginButton = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Login = styled.div`
	margin-left: 5px;
`;

const NavSection = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px auto;
`;

const Logo = styled.img`
	width: 100px;
`;

const MenuSection = styled.div`
	width: 70%;
	margin: 0 0 0 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MenuBar = styled.ul`
	display: flex;
	gap: 10px;
`;

const MenuItem = styled.li`
	list-style: none;
`;

const SearchBar = styled.div`
	position: relative;
`;

const SeachIcon = styled.div`
	position: absolute;
	top: 2px;
	left: 0;
`;

const SearchInput = styled.input`
	width: 180px;
	padding: 0 0 5px 25px;
	border: none;
	border-bottom: 1.5px solid #000;
	outline: none;
`;

export default Navbar;
