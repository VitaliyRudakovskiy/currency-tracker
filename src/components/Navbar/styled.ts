import {
	darkTheme as dark,
	lightTheme as light,
	navItemHoverColor,
	navItemClickColor,
} from '@constants/colors';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

interface INavProps {
	theme: 'dark' | 'light';
}

export const Nav = styled.nav<INavProps>`
	position: fixed;
	width: 100%;
	z-index: 2;
	background-color: ${(props) =>
		props.theme === 'dark' ? dark.primaryBackground : light.primaryBackground};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3rem 3rem;

	@media (max-width: 768px) {
		padding: 0.3rem 0.8rem;
	}
`;

export const LogoContainer = styled.img`
	width: 2.5rem;

	@media (max-width: 768px) {
		width: 1rem;
	}
`;

export const NavList = styled.ul<INavProps>`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	@media (max-width: 768px) {
		gap: 1rem;
	}

	@media (max-width: 528px) {
		gap: 0;
	}
`;

export const NavItem = styled.li`
	padding: 0.7rem;
	font-size: 1rem;

	@media (max-width: 528px) {
		padding: 0.4rem 0.3rem;
		font-size: 0.6rem;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	transition: all 0.3s;
	color: ${() =>
		useTheme().mode === 'dark' ? dark.mainTextColor : light.mainTextColor};

	&:hover {
		color: ${navItemHoverColor};
	}

	&:active {
		transform: translateY(2px);
		color: ${navItemClickColor};
	}

	&.active {
		color: ${navItemClickColor};
	}
`;
