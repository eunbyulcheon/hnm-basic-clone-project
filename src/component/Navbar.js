import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Sidebar from './Sidebar';

export const menuList = [
	'Ladies',
	'Divided',
	'Men',
	'Kids',
	'Sport',
	'MAGAZINE',
	'Sale',
	'Sustainability',
];

const Navbar = ({ auth, setAuth }) => {
	const [sidebar, setSidebar] = useState(false);
	const navigate = useNavigate();

	const showSidebar = () => setSidebar(!sidebar);

	const onKeyEnter = (e) => {
		if (e.key === 'Enter') {
			navigate(`/?q=${e.target.value}`);
		}
	};

	return (
		<>
			<NavHeader>
				<Hamburger onClick={showSidebar}>
					<FontAwesomeIcon icon={faBars} />
				</Hamburger>
				{sidebar && <Sidebar active={setSidebar} />}
				{auth ? (
					<Logout onCLick={() => setAuth(false)}>
						<FontAwesomeIcon icon={faUser} />
						<Text>Logout</Text>
					</Logout>
				) : (
					<Login onClick={() => navigate('/login')}>
						<FontAwesomeIcon icon={faUser} />
						<Text>Login</Text>
					</Login>
				)}
			</NavHeader>

			<Logo>
				<Link to="/">
					<LogoImage src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" />
				</Link>
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
					<SearchInput
						type="text"
						placeholder="Search Product"
						onKeyPress={(e) => onKeyEnter(e)}
					/>
				</SearchBar>
			</NavSection>
		</>
	);
};

const NavHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	@media (max-width: 63rem) {
		margin: 20px -30px;
	}
`;

const Hamburger = styled.div`
	font-size: 20px;

	@media (min-width: 63rem) {
		visibility: hidden;
	}
`;

const Login = styled.div`
	cursor: pointer;
`;

const Logout = styled(Login)``;

const Text = styled.span`
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

	@media (max-width: 63rem) {
		display: none;
	}
`;

const MenuItem = styled.li`
	list-style: none;
`;

const SearchBar = styled.div`
	position: relative;
	left: 84%;

	@media (max-width: 63rem) {
		display: none;
	}
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
