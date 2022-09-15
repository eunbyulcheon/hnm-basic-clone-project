import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Navbar = () => {
	const menuList = [
		'Ladies',
		'Divided',
		'Men',
		'Kids',
		'Sport',
		'MAGAZINE',
		'Sale',
		'Sustainability',
	];

	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/login');
	};

	return (
		<>
			<LoginButton>
				<FontAwesomeIcon icon={faUser} />
				<Login type="button" onClick={goToLogin}>
					Login
				</Login>
			</LoginButton>

			<Logo>
				<LogoImage src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" />
			</Logo>

			<NavSection>
				<NavBar>
					{menuList.map((menu, idx) => (
						<MenuItem key={idx}>{menu}</MenuItem>
					))}
				</NavBar>
				<SearchBar>
					<SeachIcon>
						<FontAwesomeIcon icon={faSearch} />
					</SeachIcon>
					<SearchInput type="text" placeholder="Search Product" />
				</SearchBar>
			</NavSection>
		</>
	);
};

const LoginButton = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
`;

const Login = styled.button`
	margin-left: 8px;
	font-size: 14px;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px auto;
`;

const LogoImage = styled.img`
	width: 100px;
`;

const NavSection = styled.div`
	display: flex;
	position: relative;
	margin: 25px auto 60px auto;
`;

const NavBar = styled.ul`
	display: flex;
	gap: 15px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 768px) {
		flex-wrap: wrap;
		margin: 25px auto 60px auto;
		justify-content: center;
		gap: 10px;
	}
`;

const MenuItem = styled.li`
	list-style: none;
`;

const SearchBar = styled.div`
	position: relative;
	left: 84%;
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
	font-size: 14px;
`;

export default Navbar;
