import styled from 'styled-components';

const backgroundColor = '#000000';
const itemOnHoverColor = '#ffffff';
const itemOnClickColor = '#00ff00';

interface INavProps {
	theme: 'dark' | 'light';
}

export const Nav = styled.nav<INavProps>`
	background-color: ${backgroundColor};
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
	text-decoration: none;
	padding: 0.7rem;
	font-size: 1rem;
	transition: text-shadow 0.3s ease;
	cursor: pointer;

	&:hover {
		text-shadow: 0 0 1rem ${itemOnHoverColor};
	}

	&:active {
		color: ${itemOnClickColor};
		text-shadow: 0 0 3rem ${itemOnClickColor};
	}
`;
