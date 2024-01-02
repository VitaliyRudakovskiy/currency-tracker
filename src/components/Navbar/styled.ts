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
	width: 100vw;
	z-index: 2;
	background-color: ${(props) =>
		props.theme === 'dark' ? dark.primaryBackground : light.primaryBackground};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3rem 3rem;
`;

export const NavList = styled.ul<INavProps>`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

export const NavItem = styled.li`
	padding: 0.7rem;
	font-size: 1rem;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	transition: all 0.3s;
	color: ${() =>
		useTheme().mode === 'dark' ? dark.navItemColor : light.navItemColor};

	&:hover {
		color: ${navItemHoverColor};
	}

	&:active {
		transform: translateY(2px);
		color: ${navItemClickColor};
	}
`;
